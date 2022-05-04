import axios from "axios";
import { useEffect, useState } from "react";

function Cards() {
    const [heroes, setHeroes] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/roster/heroes").then((response) => {
            setHeroes(response.data);
            console.log(response.data);
        });
    });

    return (
        <div>
            <p>testing cards component</p>
            {/* <h1>{heroes[0].heroName}</h1> */}

            <cardContainer>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {heroes.map((hero) => {
                                return (
                                    <>
                                        <img class="d-block w-100" src={hero.image} alt="First slide" />
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/* {heroes.map((hero) => {
                    return (
                        <>
                            <div key={hero._id}>
                                <h3>{hero.heroName}</h3>
                                <h3>{hero.secretIdentity}</h3>
                                <h3>{hero.teamName}</h3>
                                <img src={hero.image} alt="hero" width="140px" height="180px" />
                            </div>
                        </>
                    );
                })} */}
            </cardContainer>
        </div>
    );
}

export default Cards;
