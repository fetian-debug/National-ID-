import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/Group.png';
import vector from './assets/Vector.png';
import img2 from './assets/mask.png';
import birth from './assets/birth.png';
import location1 from './assets/location.png';
import gender1 from './assets/gender.png';

const months = {
  '01': 'يناير',
  '02': 'فبراير',
  '03': 'مارس',
  '04': 'أبريل',
  '05': 'مايو',
  '06': 'يونيو',
  '07': 'يوليو',
  '08': 'أغسطس',
  '09': 'سبتمبر',
  '10': 'أكتوبر',
  '11': 'نوفمبر',
  '12': 'ديسمبر'
};

const governorates = {
  '01': 'القاهرة',
  '02': 'الإسكندرية',
  '03': 'بورسعيد',
  '04': 'السويس',
  '11': 'دمياط',
  '12': 'الدقهلية',
  '13': 'الشرقية',
  '14': 'القليوبية',
  '15': 'كفر الشيخ',
  '16': 'الغربية',
  '17': 'المنوفية',
  '18': 'البحيرة',
  '19': 'الإسماعيلية',
  '21': 'الجيزة',
  '22': 'بني سويف',
  '23': 'الفيوم',
  '24': 'المنيا',
  '25': 'أسيوط',
  '26': 'سوهاج',
  '27': 'قنا',
  '28': 'أسوان',
  '29': 'الأقصر',
  '31': 'البحر الأحمر',
  '32': 'الوادي الجديد',
  '33': 'مطروح',
  '34': 'شمال سيناء',
  '35': 'جنوب سيناء',
  '88': 'خارج الجمهورية'
};


function App() {
    const [nationalId, setNationalId] = useState('');
    const [result, setResult] = useState({ dateOfBirth: '', location: '', gender: '' });

  const analyzeNationalId = () => {
    if (nationalId.length !== 14 || isNaN(nationalId)) {
        alert('رقم البطاقة غير صحيح');
      return;
    }

    const yearPrefix = nationalId.charAt(0) === '2' ? '19' : '20';
    const year = yearPrefix + nationalId.substring(1, 3);
    const month = nationalId.substring(3, 5);
    const day = nationalId.substring(5, 7);
    const dateOfBirth = `${months[month] || 'غير معروف'} ${day}, ${year}`;

    const genderCode = nationalId.charAt(12);
    const gender = genderCode % 2 === 0 ? 'أنثى' : 'ذكر';

    const governorateCode = nationalId.substring(7, 9); // الحصول على رمز المحافظة
    const location = governorates[governorateCode] || 'غير معروف';

    setResult({ dateOfBirth, location, gender });
  };

  return (
    <>

      <div className="custom-container d-flex justify-content-center" style={{backgroundColor: '#fff', marginTop: '50px'}}>
        <div className="img1"><img src={img1} alt=".." /></div>   
        <div className="img2"><img src={img2} alt=".." /></div>   
        <div className="img3"><img src={img2} alt=".." /></div> 

        <div className="group1">
          <h1>!ممكن نتعرف</h1>
          <p className="description">من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</p>

          <div className="input-group border-group">
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={analyzeNationalId}>     
                إبحث  
              </button>
            </div>

            <div className="vector"><img src={vector} alt=".." /></div>

            <input     
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}           
              type="text"
              className="form-control text-right"
              placeholder="... رقم البطاقة"
            />

          </div>
        </div>

        <div className="group2  d-flex flex-column flex-md-row justify-content-md-between">
          <div className="box1 mx-2 mb-3 mb-md-0">
            <div className="birth"><img src={birth} alt=".." /></div>
            <p>تاريخ الميلاد</p>
            <p className="line"></p>
            <h2>{result.dateOfBirth || 'غير معروف'}</h2>
          </div>

          <div className="box1 mx-2 mb-3 mb-md-0">
            <div className="birth"><img src={location1} alt=".." /></div>
            <p>محل الاقامة</p>
            <p className="line"></p>
            <h2>{result.location || 'غير معروف'}</h2>
          </div>

          <div className="box1 mx-2 mb-3 mb-md-0">
            <div className="birth"><img src={gender1} alt=".." /></div>
            <p>النوع</p>
            <p className="line"></p>
            <h2>{result.gender || 'غير معروف'}</h2>
          </div>
          <div className="box1 box4 mx-2 mb-3 mb-md-0">

            <h2> قدرنا نعرف الأتي</h2>
          </div>
        </div>

      </div>
    </>
  );
}

export default App






