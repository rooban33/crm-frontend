import React from 'react'; // Import React
import useLanguage from '@/locale/useLanguage';
import "./style.css";

export default function Integration() {
  const translate = useLanguage();
  return (
    <div>
    <div className="containercard"> {/* Use className instead of class in JSX */}
      <div className="wrappercard"> {/* Use className instead of class in JSX */}
        <div className="banner-image" style={{backgroundImage: `url('https://cdn.windowsreport.com/wp-content/uploads/2020/04/Just-Dial.png`}}>
        </div>
        <h1>JustDail Integration</h1>
        <p>Don't miss any leads</p>
      </div>
      <div className="button-wrapper"> {/* Use className instead of class in JSX */}
        <button className="btn fill">Integrate Now</button> {/* Use className instead of class in JSX */}
      </div>
    </div>
    <br/>
    <div className="containercard"> {/* Use className instead of class in JSX */}
      <div className="wrappercard"> {/* Use className instead of class in JSX */}
        <div className="banner-image" style={{backgroundImage: `url('https://i.pinimg.com/originals/dc/ff/1e/dcff1e321e7fc8387ccb4d1007906cdf.png`}}>
        </div>
        <h1>Meta Integration</h1>
        <p>Automate your meta</p>
      </div>
      <div className="button-wrapper"> {/* Use className instead of class in JSX */}
        <button className="btn fill">Integrate Now</button> {/* Use className instead of class in JSX */}
      </div>
    </div>
    </div>
  );
}
