import './App.css';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#4ade80', '#facc15', '#e5e7eb'];

const sections = [
  "Introductory Problems",
  "Sorting and Searching",
  "Dynamic Programming",
  "Graph Algorithms",
  "Range Queries",
  "Tree Algorithms",
  "Mathematics",
  "String Algorithms",
  "Geometry",
  "Advanced Techniques",
  "Sliding Window Problems",
  "Interactive Problems",
  "Bitwise Operations",
  "Construction Problems",
  "Advanced Graph Problems",
  "Counting Problems",
  "Additional Problems I",
  "Additional Problems II",
];

function Output() {
  const [html, setHtml] = useState('');
  const [counter, setCounter] = useState(new Map());
  const [counter1, setCounter1] = useState(new Map());
  const [counter2, setCounter2] = useState(new Map());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const content = sessionStorage.getItem('htmlContent');
    if (content) setHtml(content);
  }, []);

  useEffect(() => {
    if (!html) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const allH2 = [...doc.querySelectorAll('h2')];

    const results = new Map();
    const results1 = new Map();
    const results2 = new Map();

    for (let h2 of allH2) {
      const sectionName = h2.textContent.trim();
      let ul = h2.nextElementSibling;
      if (!ul || ul.tagName.toLowerCase() !== 'ul') continue;

      const tasks = ul.querySelectorAll('li.task');
      for (let task of tasks) {
        const scoreSpan = task.querySelector('span.task-score');
        if (!scoreSpan) continue;

        if (scoreSpan.classList.contains('full')) {
          results.set(sectionName, (results.get(sectionName) || 0) + 1);
        } else if (scoreSpan.classList.contains('zero')) {
          results1.set(sectionName, (results1.get(sectionName) || 0) + 1);
        }
        results2.set(sectionName, (results2.get(sectionName) || 0) + 1);
      }
    }

    setCounter(results);
    setCounter1(results1);
    setCounter2(results2);
    setLoaded(true);
  }, [html]);

  const chartDataTemplate = (x) => {
    const solved = counter.get(x) || 0;
    const attempted = counter1.get(x) || 0;
    const total = counter2.get(x) || 0;
    const remaining = total - solved - attempted;

    return [
      { name: 'Solved', value: solved },
      { name: 'Attempted', value: attempted },
      { name: 'Remaining', value: remaining },
    ];
  };

  return (
    <div className="p-12 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen">
      <button
        onClick={() => window.location.href = '/'}
        className="fixed top-6 left-6 bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        Back
      </button>

      <h1 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-4xl font-extrabold neon-text z-50">
        Section Wise Stats
      </h1>

      <br /><br />
    
       <div className='flex justify-center'>
        {loaded && (
            <div className="grid grid-cols-3 grid-rows-6 gap-8 p-10 center">
            {sections.map((title, x) => (
                <div key={x} className="bg-black text-xl text-white rounded-2xl p-8 h-96 w-96 shadow flex flex-col items-center">
                <h2 className="text-md font-bold mb-2 neon-text text-center underline">{title} <br></br><br></br></h2>
                <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                <PieChart width={220} height={220}>
                  <Pie
                    data={chartDataTemplate(title)}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={1}
                    dataKey="value"
                    stroke="none"
                  >
                    {chartDataTemplate(title).map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>

                <div className="absolute text-sm text-white text-center font-bold">
                  {(counter.get(title) || 0)} / {(counter2.get(title) || 0)}
                </div>
              </div>

            </div>
            ))}
          </div>
        )}
    </div>

    <div className="fixed bottom-4 left-4 flex gap-4">
        <a
          href="https://github.com/OmAmar106/CSES-Stats-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-black border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 
                1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.932 
                0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 
                2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 
                3.222 0 4.61-2.807 5.628-5.48 5.922.432.372.816 1.104.816 2.222 0 1.606-.015 2.898-.015 
                3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden group-hover:inline transition-opacity duration-300">GitHub</span>      
        </a>

        <a
          href="https://linkedin.com/in/om-amar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-blue-700 border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-700 transition-all group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86v5.5H9.45V9h3.41v1.56h.05c.48-.91 1.67-1.86 3.44-1.86 3.68 0 4.36 2.42 4.36 5.56v6.19zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
          </svg>
          <span className="hidden group-hover:inline transition-opacity duration-300">LinkedIn</span>
        </a>

      </div>

    </div>
  );
  
  
}

export default Output;