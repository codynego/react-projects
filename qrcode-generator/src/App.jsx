import { useState } from 'react'
import QRCode from 'qrcode'
import './App.css'

function App() {
  const [url, setUrl] = useState("")
  const [qrcode, setQrcode] = useState("")


  const GenerateQrcode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }


  return (
    <>
      <div className="app">
        <h1>Qrcode Generator</h1>
        <div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="enter your url here..." 
          />

          <button onClick={GenerateQrcode}>generate</button>

          {qrcode && <>
            <img src={qrcode} />
            <a href={qrcode} download="qrcode.png">Download</a>
          </>}
          
        </div>
      </div>
    </>
  )
}

export default App
