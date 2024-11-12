import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './MagicButton';

const ContactButtonPesan = () => {
    const whatsappNumber = '62895363045374'; // Ganti dengan nomor Anda
    const templateMessage = 'Halo, saya membutuhkan bantuan untuk...'; // Ganti dengan pesan template yang diinginkan
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(templateMessage)}`;

    return (
        <a className="pt-10" href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <MagicButton
                title="Pesan Sekarang"
                icon={<FaLocationArrow />}
                position="right"
            />
        </a>
    );
};

export default ContactButtonPesan;
