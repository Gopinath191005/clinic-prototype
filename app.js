function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  const el = document.getElementById("view-" + name);
  if (el) el.classList.add("active");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.view === name);
  });
}

function goStep(n) {
  document.querySelectorAll(".step").forEach((s, i) => {
    s.classList.remove("active", "done");
    if (i < n) s.classList.add("done");
    if (i === n) s.classList.add("active");
  });
  document.querySelectorAll(".panel-section").forEach((p) => {
    p.classList.toggle("active", parseInt(p.dataset.panel, 10) === n);
  });
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("visible");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("visible"), 2800);
}

function updateVitalsPreview() {
  const bp = document.getElementById("bp");
  const pulse = document.getElementById("pulse");
  const temp = document.getElementById("temp");
  const spo2 = document.getElementById("spo2");
  if (!bp) return;
  document.getElementById("v-bp").textContent = bp.value;
  document.getElementById("v-pulse").textContent = pulse.value;
  document.getElementById("v-temp").textContent = temp.value;
  document.getElementById("v-spo2").textContent = spo2.value + "%";
}

function tickClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;
  clock.textContent = new Date().toLocaleString("en-IN", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

document.querySelectorAll(".nav-link").forEach((btn) => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

document.querySelectorAll("[data-view-jump]").forEach((btn) => {
  btn.addEventListener("click", () => showView(btn.dataset.viewJump));
});

document.querySelectorAll(".step").forEach((btn) => {
  btn.addEventListener("click", () => goStep(parseInt(btn.dataset.step, 10)));
});

document.querySelectorAll("[data-action='go-step']").forEach((btn) => {
  btn.addEventListener("click", () => {
    const step = parseInt(btn.dataset.step, 10);
    goStep(step);
    const messages = {
      1: "Patient sent to vitals station",
      2: "Vitals saved — patient with doctor",
      3: "Rx signed — sent to pharmacy & billing",
    };
    if (messages[step]) showToast(messages[step]);
  });
});

document.querySelectorAll(".queue-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".queue-item").forEach((q) => q.classList.remove("selected"));
    item.classList.add("selected");
    const name = item.dataset.patient;
    document.getElementById("sidebar-name").textContent = name;
    const input = document.getElementById("input-name");
    if (input) input.value = name;
    showToast("Loaded: " + name);
  });
});

["bp", "pulse", "temp", "spo2"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", updateVitalsPreview);
});

const completeBtn = document.getElementById("btn-complete");
if (completeBtn) {
  completeBtn.addEventListener("click", () => {
    showToast("Payment recorded — visit complete");
  });
}

tickClock();
setInterval(tickClock, 60000);
