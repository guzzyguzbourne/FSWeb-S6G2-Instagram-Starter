/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from "react";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import sahteVeri from "./sahte-veri";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [begenilenler, setBegenilenler] = useState([]);
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  //arama fonksiyonu yaz, arama state'i olacak, bişeyler arandıında bu fonksiyon çalışacak, 
  //arama inputundaki her değişimde arama fonksiyu çalışıp, aramanın state'ini güncelleyecek, aranmış kelimeleri gönderilerde arayarak setGönderilerle gönderileri güncelleyecek çalıştıkça gönderiler (yorumun sahibini, postun sahibi, yorumlar, kullanıcılarda, gönderi adında vs aratabiliriz) 


  const gonderiyiBegen = (gonderiID) => {
    if(!begenilenler.includes(gonderiID)) {
    let guncelGonderiler = gonderiler.map((item) => {
      if (item.id === gonderiID){
        item.likes ++;
        }
      return item;
      })
    setGonderiler(guncelGonderiler);
    begenilenler.push(gonderiID);
    setBegenilenler(begenilenler);
    /*
    let gonderi = gonderiler.find(item => item.id == gonderiID)*/
    }
  };


  return (
    <div className="App">
      <AramaCubugu />
      <Gonderiler gonderiler = {gonderiler} gonderiyiBegen = {gonderiyiBegen} />
    </div>
  );
};

export default App;
