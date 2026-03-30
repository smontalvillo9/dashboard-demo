// Dashboard Demo — Tab switching + Chart generation

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    event.target.classList.add('active');
}

// Generate demand sensing chart
function generateDemandChart() {
    const chart = document.getElementById('demand-chart');
    if (!chart) return;

    // Simulated monthly data (units in thousands)
    const real =       [42, 38, 45, 51, 48, 55, 52, 44, 58, 63, 70, 75];
    const traditional = [40, 40, 43, 46, 50, 50, 53, 48, 52, 58, 65, 68];
    const aiSensing =  [41, 37, 44, 50, 49, 54, 53, 45, 57, 62, 69, 74];

    const maxVal = Math.max(...real, ...traditional, ...aiSensing);

    chart.innerHTML = real.map((r, i) => {
        const rH = (r / maxVal) * 180;
        const tH = (traditional[i] / maxVal) * 180;
        const aH = (aiSensing[i] / maxVal) * 180;
        return `
            <div class="chart-group">
                <div class="bar" style="height:${rH}px; background:#dc4b4b;" title="Real: ${r}K"></div>
                <div class="bar" style="height:${tH}px; background:#555;" title="Forecast: ${traditional[i]}K"></div>
                <div class="bar" style="height:${aH}px; background:#6e916e;" title="IA: ${aiSensing[i]}K"></div>
            </div>
        `;
    }).join('');
}

// Animate KPI bars on scroll
function animateKPIs() {
    document.querySelectorAll('.kpi-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = w; }, 300);
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    generateDemandChart();
    animateKPIs();
});
