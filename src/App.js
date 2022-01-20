import React from 'react';
import {
  Header,
  Introduction,
  Product as DescProd,
  Collection,
  Networks,
  Partners,
  Footer,
} from './components';
import img2 from './images/img2.jpg';

const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <DescProd
        image={img2}
        height="300px"
        title="Profile"
        description="PT Dapensi Trio Usaha (PT DTU) yang didirikan pada tanggal 21 Januari 1992 berdasarkan Akta Notaris Wiratni Ahmadi, SH di Bandung, tanggal 21 Januari 1992 Nomor 55, yang disahkan oleh Menteri Kehakiman Republik Indonesia dengan Surat Keputusan Pengesahan Menteri Kehakiman & HAM RI, Tahun 1995 Nomor : C2-3976.HT.01.01.TH.95."
      />
      <Collection />
      <Networks />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
