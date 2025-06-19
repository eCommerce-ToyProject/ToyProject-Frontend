import {Swiper, SwiperSlide} from "swiper/react"
import LiveCard from "./LiveCard"

const Banner = ({LiveList}) => {
    return (
        <Swiper
            onSlideChange={() => console.log('slide view')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {/* {LiveList.length !== 0 ?? LiveList.map(val => <SwiperSlide><LiveCard /></SwiperSlide>)} */}
        </Swiper>
    )
}

export default Banner