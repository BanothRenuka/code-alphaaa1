// ================= INCOME STATEMENT =================
new Chart(document.getElementById("incomeChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Revenue",
                data: [50000, 52000, 58000, 60000, 63000, 65000],
                backgroundColor: "green"
            },
            {
                label: "Expenses",
                data: [30000, 32000, 34000, 36000, 37000, 38000],
                backgroundColor: "orange"
            }
        ]
    },
    options: {
        responsive: true
    }
});

// ================= BALANCE SHEET =================
new Chart(document.getElementById("balanceChart"), {
    type: "pie",
    data: {
        labels: ["Assets", "Liabilities", "Equity"],
        datasets: [{
            data: [120000, 50000, 70000],
            backgroundColor: ["blue", "red", "green"]
        }]
    }
});

// ================= CASH FLOW =================
new Chart(document.getElementById("cashFlowChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Net Cash Flow",
            data: [10000, 12000, 9000, 15000, 14000, 16000],
            borderColor: "purple",
            fill: false
        }]
    }
});

// ================= PROFIT FORECAST =================
new Chart(document.getElementById("forecastChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
            {
                label: "Actual Profit",
                data: [20000, 20000, 24000, 24000, 26000, 27000],
                borderColor: "green",
                fill: false
            },
            {
                label: "Forecasted Profit",
                data: [null, null, null, null, null, 27000, 29000, 31000, 33000],
                borderColor: "yellow",
                borderDash: [5, 5],
                fill: false
            }
        ]
    }
});
