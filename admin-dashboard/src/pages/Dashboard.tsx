import React from "react";
 
const summaryData = [
  { label: "Routes", value: 50, icon: "🗺️", color: "#FFD166" },
  { label: "Buses", value: 10, icon: "🚌", color: "#FF6B6B" },
  { label: "Students", value: 80, icon: "👨‍🎓", color: "#6C63FF" },
];
 
const attendanceData = [
  { date: "Apr 01", value: 30 },
  { date: "Apr 02", value: 50 },
  { date: "Apr 03", value: 75 },
  { date: "Apr 04", value: 60 },
  { date: "Apr 05", value: 55 },
  { date: "Apr 06", value: 65 },
  { date: "Apr 07", value: 50 },
  { date: "Apr 08", value: 70 },
  { date: "Apr 09", value: 45 },
  { date: "Apr 10", value: 80 },
];
 
const holidays = [
  { label: "Vacation", days: [2, 3, 4, 5], color: "#4F8CFF" },
  { label: "Ed Fitr", days: [6], color: "#FF6B6B" },
  { label: "Vacation", days: [18, 19, 20, 21], color: "#4F8CFF" },
  { label: "Vacation", days: [30, 31], color: "#4F8CFF" },
];
 
const staff = [
  { name: "Ahmed Ibrahim", role: "Alnoor schools Admin" },
  { name: "Noha Ibrahim", role: "Aldelta schools Admin" },
];
 
const pageWrapper: React.CSSProperties = {
  minHeight: "100vh",
  background: "#f7f8fa",
  fontFamily: "'Inter', sans-serif",
};
const bodyWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 0,
  padding: "32px 32px 0 32px",
  width: "100%",
  boxSizing: "border-box",
};
const mainContent: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 32,
  width: "100%",
  alignItems: "flex-start",
};
const leftColumn: React.CSSProperties = {
  flex: 2,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
};
const rightColumn: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 24,
};
const summaryCards: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 24,
  width: "100%",
  justifyContent: "space-between",
};
const summaryCard = (color: string): React.CSSProperties => ({
  flex: 1,
  background: color,
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px 20px 20px 20px",
  minWidth: 0,
  minHeight: 100,
  position: "relative",
  boxSizing: "border-box",
});
const summaryIcon: React.CSSProperties = {
  fontSize: "2.5rem",
  marginBottom: 8,
};
const summaryValue: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#fff",
  marginBottom: 4,
};
const summaryLabel: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#fff",
  fontWeight: 500,
};
const attendanceSection: React.CSSProperties = {
  background: "#fff",
  borderRadius: 20,
  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
  padding: 32,
  marginTop: 24,
  minHeight: 420,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  overflow: "hidden",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: 1100,
  marginLeft: "auto",
  marginRight: "auto",
};
const attendanceHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#222",
  marginBottom: 8,
};
const reportsLink: React.CSSProperties = {
  color: "#4F8CFF",
  fontSize: "1rem",
  cursor: "pointer",
};
const recentSection: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 32,
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  padding: 24,
  marginTop: 8,
};
const recentItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: "1rem",
  marginBottom: 8,
  color: "#444",
};
const recentCountry: React.CSSProperties = {
  background: "#f7f8fa",
  color: "#4F8CFF",
  borderRadius: 8,
  padding: "2px 8px",
  fontSize: "0.9rem",
  marginLeft: 8,
};
const holidaysSection: React.CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  padding: 24,
};
const calendarWrapper: React.CSSProperties = {
  marginTop: 8,
};
const calendarHeader: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  fontWeight: 600,
  color: "#888",
  marginBottom: 4,
  fontSize: "0.95rem",
};
const calendarGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: 2,
};
const calendarDay = (bg?: string, color?: string): React.CSSProperties => ({
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  fontSize: "1rem",
  background: bg || "#f7f8fa",
  color: color || "#222",
});
const staffSection: React.CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  padding: 24,
};
const staffList: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  marginTop: 8,
};
const staffCard: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
  background: "#f7f8fa",
  borderRadius: 12,
  padding: "12px 16px",
};
const staffAvatar: React.CSSProperties = {
  fontSize: "2rem",
  background: "#fff",
  borderRadius: "50%",
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
};
const staffName: React.CSSProperties = {
  fontWeight: 600,
  color: "#222",
  fontSize: "1.1rem",
};
const staffRole: React.CSSProperties = {
  color: "#888",
  fontSize: "0.95rem",
  marginBottom: 6,
};
const staffActions: React.CSSProperties = {
  display: "flex",
  gap: 8,
};
const staffButton: React.CSSProperties = {
  background: "#4F8CFF",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "4px 12px",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "background 0.2s",
  marginRight: 4,
};
 
const tripData = [
  { label: "Not Started", value: 12, color: "#FFD166" },
  { label: "Completed", value: 30, color: "#4F8CFF" },
  { label: "Upcoming", value: 8, color: "#FF6B6B" },
];
 
const tripData2025 = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 0 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "May", value: 0 },
  { month: "Jun", value: 0 },
  { month: "Jul", value: 0 },
  { month: "Aug", value: 12, color: "#34495e" },
  { month: "Sep", value: 15, color: "#34495e" },
  { month: "Oct", value: 55, color: "#e67e22" },
  { month: "Nov", value: 45, color: "#2ecc71" },
  { month: "Dec", value: 40, color: "#00bfff" },
];
 
function PieChartWithLegend() {
  // Pie chart for Not Started, Completed, Upcoming Trips
  const total = tripData.reduce((sum, t) => sum + t.value, 0);
  const angles = tripData.reduce<
    {
      start: number;
      end: number;
      color: string;
      label: string;
      value: number;
      percent: number;
    }[]
  >((acc, t, i) => {
    const prevEnd = acc[i - 1]?.end || 0;
    const percent = total ? t.value / total : 0;
    return [
      ...acc,
      {
        start: prevEnd,
        end: prevEnd + percent * 360,
        color: t.color,
        label: t.label,
        value: t.value,
        percent: percent * 100,
      },
    ];
  }, []);
 
  // Responsive container
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        padding: "0 12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <svg
          width={170}
          height={170}
          style={{
            background: "#fff",
            display: "block",
            maxWidth: "100%",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.07))",
          }}
        >
          {/* Pie slices and title ... unchanged ... */}
          {angles.map((a, i) => {
            const { x1, y1, x2, y2, largeArc } = (function getArc(
              cx,
              cy,
              r,
              startAngle,
              endAngle
            ) {
              const rad = (deg) => (Math.PI / 180) * deg;
              const x1 = cx + r * Math.cos(rad(startAngle - 90));
              const y1 = cy + r * Math.sin(rad(startAngle - 90));
              const x2 = cx + r * Math.cos(rad(endAngle - 90));
              const y2 = cy + r * Math.sin(rad(endAngle - 90));
              const largeArc = endAngle - startAngle > 180 ? 1 : 0;
              return { x1, y1, x2, y2, largeArc };
            })(85, 85, 65, a.start, a.end);
            const d = `M85,85 L${x1},${y1} A65,65 0 ${largeArc} 1 ${x2},${y2} Z`;
            return (
              <path
                key={a.label}
                d={d}
                fill={a.color}
                stroke="#fff"
                strokeWidth={2}
              />
            );
          })}
        </svg>
      </div>
      {/* Legend below the pie chart, centered */}
      <div
        style={{
          marginTop: 18,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 28,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {angles.map((a, i) => (
          <div
            key={a.label}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 18,
                height: 18,
                background: a.color,
                borderRadius: 4,
                marginRight: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            ></span>
            <span style={{ color: "#222" }}>{a.label} Trips:</span>
            <span style={{ color: a.color, fontWeight: 700, marginLeft: 5 }}>
              {a.percent.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
function VerticalDivider() {
  return (
    <div
      style={{
        width: 1,
        background: "#eee",
        height: "80%",
        minHeight: 180,
        margin: "0 32px",
        alignSelf: "center",
        borderRadius: 1,
      }}
    />
  );
}
 
function BarGraphCard() {
  return (
    <div
      style={{
        background: "#f8fafd",
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: 24,
        width: "100%",
        maxWidth: 350,
        minWidth: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 20,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        2025 Trips
      </div>
      <InvertedBarGraph />
    </div>
  );
}
 
function InvertedBarGraph() {
  const max = Math.max(...tripData2025.map((t) => t.value), 1);
  // Make graph smaller and fit all months
  return (
    <svg width={260} height={260} style={{ background: "#fff" }}>
      {/* Y axis labels */}
      {tripData2025.map((trip, i) => (
        <text
          key={trip.month}
          x={0}
          y={25 + i * 20}
          fontSize={12}
          textAnchor="start"
          fill="#888"
          alignmentBaseline="middle"
        >
          {trip.month}
        </text>
      ))}
      {/* Bars */}
      {tripData2025.map((trip, i) => (
        <g key={trip.month}>
          <rect
            x={32}
            y={15 + i * 20}
            width={(trip.value / max) * 170}
            height={12}
            fill={trip.color || "#bbb"}
            rx={4}
          />
          <text
            x={38 + (trip.value / max) * 170}
            y={25 + i * 20}
            fontSize={12}
            fill="#222"
            alignmentBaseline="middle"
          >
            {trip.value > 0 ? trip.value : ""}
          </text>
        </g>
      ))}
      {/* X axis label */}
      {/* <text x={120} y={250} fontSize={12} textAnchor="middle" fill="#888">
        Values
      </text> */}
    </svg>
  );
}
 
function ModernJuly2025Calendar() {
  // July 2025: 1st is Tuesday, 31 days
  const daysInMonth = 31;
  const startDay = 2; // 0=Sun, 1=Mon, 2=Tue
  const holidays = [10, 18, 24]; // Example holidays (weekdays)
  const weeks: (number | null)[][] = [];
  let day = 1 - startDay;
  for (let w = 0; w < 6; w++) {
    const week: (number | null)[] = [];
    for (let d = 0; d < 7; d++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push(null);
      }
      day++;
    }
    weeks.push(week);
  }
  const isWeekend = (col: number) => col === 0 || col === 6;
  const isHoliday = (d: number) => holidays.includes(d);
  return (
    <div
      style={{
        width: 260,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: 18,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 17,
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        July 2025
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 4,
          marginBottom: 8,
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              color: "#888",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {d}
          </div>
        ))}
        {weeks.flat().map((d, i) => {
          const col = i % 7;
          const isWknd = isWeekend(col);
          const isHol = d && isHoliday(d);
          let bg = "#f7f8fa",
            color = "#222",
            border = "none";
          if (isWknd && d) {
            bg = "#ffeaea";
            color = "#e74c3c";
          }
          if (isHol) {
            bg = "#e74c3c";
            color = "#fff";
            border = "2px solid #c0392b";
          }
          return (
            <div
              key={i}
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
                background: bg,
                color,
                fontWeight: 600,
                fontSize: 15,
                border,
                margin: "0 auto",
                boxSizing: "border-box",
                transition: "background 0.2s",
              }}
            >
              {d || ""}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              width: 16,
              height: 16,
              background: "#ffeaea",
              borderRadius: 4,
              display: "inline-block",
              border: "1.5px solid #e74c3c",
            }}
          ></span>
          <span style={{ color: "#e74c3c", fontWeight: 600, fontSize: 13 }}>
            Weekend
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              width: 16,
              height: 16,
              background: "#e74c3c",
              borderRadius: 4,
              display: "inline-block",
              border: "2px solid #c0392b",
            }}
          ></span>
          <span style={{ color: "#c0392b", fontWeight: 600, fontSize: 13 }}>
            Holiday
          </span>
        </div>
      </div>
    </div>
  );
}
 
function ReportsCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: 24,
        marginTop: 24,
        minHeight: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 18,
          marginBottom: 18,
          letterSpacing: 0.2,
        }}
      >
        Reports
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            background: "#f7f8fa",
            borderRadius: 12,
            padding: "14px 16px",
            fontWeight: 500,
            fontSize: 15,
            color: "#222",
            boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
            transition: "box-shadow 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(79,140,255,0.10)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)")
          }
        >
          <span
            style={{
              background: "#4F8CFF",
              color: "#fff",
              borderRadius: 8,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              flexShrink: 0,
              boxShadow: "0 1px 4px rgba(79,140,255,0.10)",
            }}
          >
            📊
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Monthly Trip Summary Report</span>
            <span
              style={{
                color: "#888",
                fontWeight: 400,
                fontSize: 13,
                marginTop: 2,
              }}
            >
              Overview of all trips for the month
            </span>
          </div>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            background: "#f7f8fa",
            borderRadius: 12,
            padding: "14px 16px",
            fontWeight: 500,
            fontSize: 15,
            color: "#222",
            boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
            transition: "box-shadow 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(255,209,102,0.10)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)")
          }
        >
          <span
            style={{
              background: "#FFD166",
              color: "#fff",
              borderRadius: 8,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              flexShrink: 0,
              boxShadow: "0 1px 4px rgba(255,209,102,0.10)",
            }}
          >
            📅
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Holiday & Attendance Report</span>
            <span
              style={{
                color: "#888",
                fontWeight: 400,
                fontSize: 13,
                marginTop: 2,
              }}
            >
              Details of holidays and attendance
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
 
function DashboardHeaderCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: "28px 32px 48px 32px",
        marginBottom: 28,
        marginLeft: 32,
        marginRight: 32,
        width: "auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#2563eb",
          marginBottom: 6,
          letterSpacing: 0.2,
        }}
      >
        Dashboard
      </div>
      <div style={{ fontSize: 17, color: "#444", fontWeight: 500 }}>
        Welcome back! Here's an overview of your metrics.
      </div>
    </div>
  );
}
 
const DashboardPage: React.FC = () => {
  return (
    <div style={pageWrapper}>
      <DashboardHeaderCard />
      <div style={bodyWrapper}>
        <main style={mainContent}>
          <div style={leftColumn}>
            <div style={summaryCards}>
              {summaryData.map((item) => (
                <div key={item.label} style={summaryCard(item.color)}>
                  <div style={summaryIcon}>{item.icon}</div>
                  <div style={summaryValue}>{item.value}</div>
                  <div style={summaryLabel}>{item.label}</div>
                </div>
              ))}
            </div>
            <div style={attendanceSection}>
              <div style={attendanceHeader}>
                <span>Trips Overview</span>
                {/* <span style={reportsLink}>Reports</span> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "stretch",
                  width: "100%",
                  gap: 0,
                  flexWrap: "wrap",
                  minHeight: 320,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    minWidth: 260,
                    maxWidth: 480,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    padding: "0 8px",
                  }}
                >
                  <PieChartWithLegend />
                </div>
                <VerticalDivider />
                <div
                  style={{
                    flex: "1 1 0",
                    minWidth: 260,
                    maxWidth: 480,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    padding: "0 8px",
                  }}
                >
                  <BarGraphCard />
                </div>
              </div>
            </div>
          </div>
          <div style={rightColumn}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                height: "100%",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  padding: 20,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  Holidays
                </h4>
                <ModernJuly2025Calendar />
              </div>
              <ReportsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
 
export default DashboardPage;
 
 