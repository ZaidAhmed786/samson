import React from 'react'

const MapSection = () => {
  return (
    <div className="ba-contact-map-area has-ba-contact-overlay">
        <div className="ba-contact-map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004071.476136694!2d-104.65623853113215!3d37.275644573063445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z4Kau4Ka-4Kaw4KeN4KaV4Ka_4KaoIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmt-CnjeCmn-CnjeCmsA!5e0!3m2!1sbn!2sbd!4v1668775587168!5m2!1sbn!2sbd" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
  )
}

export default MapSection