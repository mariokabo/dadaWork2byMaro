import React from 'react';

const BenefitsAuthorities = () => {
    return (
        <div className="benefits-authorities">
            <h2>Benefits and Authorities of Membership</h2>
            {/* صور المزايا */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img
                    src="/images/benefit1.jpg"
                    alt="ميزة 1"
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '15px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
                <div style={{ marginBottom: '15px', color: '#888', fontSize: '1em' }}>صورة بجودة عالية - تظهر الميزة بوضوح</div>
                <img
                    src="/images/benefit2.jpg"
                    alt="ميزة 2"
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '15px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
                <img
                    src="/images/benefit3.jpg"
                    alt="ميزة 3"
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '15px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
            </div>
            {/* كارنيه طبي */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
                <img
                    src="/images/medical-card.jpg"
                    alt="كارنيه طبي"
                    style={{ maxWidth: '300px', width: '100%', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
                <h3 style={{ color: '#d4af37', marginTop: '10px' }}>كارنيه طبي</h3>
                <p>
                    خصومات من <strong>10%</strong> إلى <strong>50%</strong> حسب محافظة العميل.<br />
                    يوجد تجميعات بأسماء وعناوين وأرقام جميع المستشفيات الخاصة ومعامل التحاليل والأشعات.<br />
                    يمكن إضافة <strong>3 أفراد من الأسرة</strong> ليصبح الكارت الطبي عائلي.
                </p>
            </div>
            {/* كارنيه نوادى */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
                <img
                    src="/images/club-card.jpg"
                    alt="كارنيه نوادى"
                    style={{ maxWidth: '300px', width: '100%', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
                <h3 style={{ color: '#d4af37', marginTop: '10px' }}>كارنيه نوادى</h3>
                <div style={{ fontWeight: 'bold', fontSize: '1.3em', margin: '20px 0 10px 0' }}>
                    النوادى المتاح دخولها:
                </div>
                <ul style={{ fontSize: '1.2em', fontWeight: 'bold', lineHeight: '2', listStyle: 'disc', textAlign: 'right', display: 'inline-block' }}>
                    <li>نادى التجديف النهرى على مستوى الجمهوريه</li>
                    <li>نادى التجاريين على مستوى الجمهوريه</li>
                    <li>نادى النصر للقوات المسلحة اسكندريه سموحه</li>
                    <li>نادى المحامين بالمعادى</li>
                    <li>نادى الثقافيين بنهايه كوبرى عباس</li>
                </ul>
            </div>
            {/* ...existing code for other benefits... */}
            <p>
                Join us today to take advantage of these benefits and enhance your professional journey in international arbitration!
            </p>
        </div>
    );
};

export default BenefitsAuthorities;
