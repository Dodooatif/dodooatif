import ButtonContainer from "./ButtonContainer"

function Hero() {
    const styles = {
        background: "red",
        height: 40,
        width: 150,
        color: "white",
    }
    return(
        <header>
            <div className="hero">
                <h2>Real Estate Developer</h2>
                <h4>We provide quality and affordable homes in Wa and beyond</h4>
            <ButtonContainer styles={styles} title="BOOK NOW"/>
            </div>
        </header>
    )
}
export default Hero;