import './App.css';
import {useState,useEffect} from 'react';

function Home() {

  const [html,sethtml] = useState('');
  const [error,seterror] = useState('');

  useEffect(() => {
    sethtml('Paste HTML content here');
  }, []);

  const handleSubmit = async ()=>{
    sessionStorage.setItem('htmlContent',html);
    window.location.href = '/output';
  };

  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    if(file && file.type=='text/html'){
      const reader = new FileReader();
      reader.onload = ()=>{
        sethtml(reader.result);
      }
      reader.readAsText(file);
    }
    else{
      seterror('Please insert a .html file.')
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-end text-white pr-32">

      <div className="mb-80 mr-80 text-[6rem] font-extrabold text-white leading-none select-none neon-text">
        CSES Stats<br/>Visualizer
      </div>

      <div className="bg-white w-[60vh] h-[80vh] rounded-lg shadow-lg flex flex-col pt-10 px-6">
        
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Paste HTML</h2>
  
        <textarea
          className="border border-gray-300 rounded-lg w-[90%] h-[65%] text-black p-4 overflow-auto resize-none self-center"
          value={html !== 'Paste HTML content here' ? html : ''}
          placeholder="Paste HTML content here"
          onChange={(e) => sethtml(e.target.value)}
        />
  
        <div className="w-[90%] mt-6 ml-8 self-start">
          <input type="file" onChange={handleFileChange} className="text-black" />
        </div>
  
        <button
          onClick={handleSubmit}
          className="mt-10 bg-purple-700 text-white w-[90%] py-3 rounded-lg hover:bg-purple-800 self-center"
        >
          Submit
        </button>

        {error && <p className="text-red-600 text-sm mt-4 self-center">{error}</p>}
      
      </div>

      <div className="absolute bottom-4 left-4 flex gap-4">
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

export default Home;
