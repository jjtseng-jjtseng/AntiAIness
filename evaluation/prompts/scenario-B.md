# Scenario B: serious information-dense dashboard

Build the main screen of a portfolio risk dashboard used daily by portfolio managers at a mid-size asset manager (desktop, bright office). Aesthetic requested: "serious, professional, information-dense, light theme; it should look like a credible financial product our PMs would trust, not a startup demo."

Required: a holdings table (name, ticker, weight, day return, 1M return, contribution to risk, VaR 95%), day P&L, portfolio vs benchmark return for 1D / 1M / YTD, exposure breakdown by sector, active alerts, and navigation for Portfolio / Risk / Trades / Reports / Settings.

Data (use exactly this; invent nothing): Portfolio "Global Equity Core", NAV $842.6M, Day P&L +$3.21M (+0.38%), benchmark MSCI ACWI 1D +0.21%, 1M portfolio +2.4% vs benchmark +1.9%, YTD +11.2% vs +9.8%, 95% 1-day VaR $9.4M (1.12%), tracking error 2.3%, beta 0.97.

Holdings (name, ticker, weight, 1D, 1M, risk contribution, VaR): Microsoft MSFT 6.8%, +0.9%, +3.1%, 7.4%, $0.71M; Apple AAPL 5.9%, +0.4%, +1.2%, 6.0%, $0.58M; Nvidia NVDA 5.1%, +2.3%, +8.7%, 9.8%, $0.94M; Amazon AMZN 4.2%, +0.6%, +2.0%, 4.9%, $0.47M; ASML ASML 3.1%, −1.1%, −0.8%, 4.1%, $0.40M; Novo Nordisk NOVO B 2.9%, −2.4%, −6.1%, 3.8%, $0.37M; TSMC 2330 2.7%, +1.5%, +4.4%, 3.9%, $0.38M; JPMorgan JPM 2.5%, +0.2%, +1.1%, 2.2%, $0.21M; Nestlé NESN 2.2%, −0.3%, +0.4%, 1.4%, $0.14M; Toyota 7203 2.0%, +0.8%, +2.6%, 1.9%, $0.18M; LVMH MC 1.8%, −1.6%, −3.3%, 2.3%, $0.22M; Shell SHEL 1.7%, +1.1%, +3.9%, 1.6%, $0.15M.

Sectors: IT 28.4%, Financials 15.1%, Health Care 12.6%, Consumer Discretionary 11.0%, Industrials 10.2%, Communication 7.9%, Energy 4.8%, Staples 4.5%, Other 5.5%.

Alerts: "NVDA weight 5.1% exceeds 5.0% single-name limit" (breach, 09:31); "Sector IT 28.4% approaching 30% limit" (warning); "FX hedge ratio EUR 93% below 95% target" (warning). As of Oct 21, 2026, 15:42 ET.
