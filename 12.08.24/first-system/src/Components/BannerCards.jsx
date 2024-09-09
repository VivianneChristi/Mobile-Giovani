import "./bannerCards.css"
 
const BannerCard = ({titulo, subtitulo}) => {
     return (
        <div className="banner_cards">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
     )
}
 
export default BannerCard;