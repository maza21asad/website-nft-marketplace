import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import ResumeAsad from '@/assets/Resume - Mohammed Asaduzzaman Asad.jpg'

function Resume() {
    return (
        <Wrapper>
            <div className='top-[30px] left-[130px] text-[30px] relative'>Mohammed Asaduzzaman Asad <br/> Resume</div>
            <div className='top-[50px] left-[90px] relative'><Image src={ResumeAsad} alt=""/> </div>
        </Wrapper>
        
    );
}

export default Resume