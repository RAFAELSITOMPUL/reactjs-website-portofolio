import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Halo semuanya! Nama saya Nico Nainggolan. Saya seorang pengembang web dari PematangSiantar, Sumatera Utara. Saya memiliki pengalaman 3 tahun dalam pengembangan web Full-Stack. Saya sangat menikmati apa yang saya lakukan saat ini, menurut saya membuat program bukan sekedar pekerjaan, tapi juga sebuah seni yang mempunyai nilai estetika.</p>
                <p>Tugas saya adalah membangun situs web Anda agar berfungsi dan ramah pengguna namun tetap menarik. Selain itu, saya memberikan sentuhan pribadi pada produk Anda dan memastikan bahwa situs web menarik perhatian dan mudah digunakan. Tujuan saya adalah menyampaikan pesan dan identitas Anda dengan cara yang paling kreatif. Jika anda berminat mempekerjakan saya, silahkan menghubungi kontak yang tertera</p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About