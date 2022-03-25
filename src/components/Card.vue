<template>
    <div class="card">
        <slot name="image"></slot>

        <div class="card__text">
            <div>
                <h3>
                    <slot name="name"></slot>
                </h3>
                <p>
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="card__text--heart">
                <i class="card__text--vide far fa-heart"></i>
                <i class="card__text--plein fas fa-heart"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<style>
.card {
    position: relative;
    background: #fff;
    border-radius: 20px;
    margin: 15px 0;
}

.card:hover {
    -webkit-box-shadow: 2px 2px 5px grey;
    box-shadow: 2px 2px 5px grey;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
}

.card h2 {
    font-size: 26px;
}

.card img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 18px 18px 0 0;
}

.card__nouveau {
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    color: #008766;
    padding: 5px 8px;
    border-radius: 2px;
    background: #99e2d0;
    right: 12px;
    top: 12px;
}

.card__text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 20px;
    position: relative;
}

.card__text h3 {
    font-size: 18px;
    font-weight: bold;
}

.card__text--heart {
    position: relative;
    font-size: 20px;
}

.card__text--heart:hover > .card__text--plein {
    -webkit-animation: remplissage 0.6s ease-in forwards;
    animation: remplissage 0.6s ease-in forwards;
}

.card__text--heart:hover > .card__text--vide::before {
    content: "\f004";
    -webkit-animation: opac 0.6s linear forwards;
    animation: opac 0.6s linear forwards;
}

.card__text--plein {
    position: absolute;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#ff79da),
        to(#9356dc)
    );
    background: linear-gradient(#ff79da, #9356dc);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    opacity: 0;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
}

@media screen and (min-width: 768px) {
    .card {
        margin: 20px;
    }
    .card__text h3 {
        font-size: 20px;
    }
    .card__text i {
        font-size: 26px;
    }
}
@media screen and (min-width: 1024px) {
    .card {
        margin: 20px 40px;
        margin: 20px;
    }
    .card img {
        height: 300px;
    }
    .card--1 {
        -ms-grid-column: 1;
        grid-column: 1;
        -ms-grid-row: 2;
        grid-row: 2;
    }
    .card--2 {
        -ms-grid-column: 2;
        grid-column: 2;
        -ms-grid-row: 2;
        grid-row: 2;
    }
    .card--3 {
        -ms-grid-column: 1;
        grid-column: 1;
        -ms-grid-row: 3;
        grid-row: 3;
    }
    .card--4 {
        -ms-grid-column: 2;
        grid-column: 2;
        -ms-grid-row: 3;
        grid-row: 3;
    }
    .card__text h3 {
        font-size: 26px;
    }
    .card__text i {
        font-size: 32px;
    }
}
</style>