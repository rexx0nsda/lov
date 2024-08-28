<template>
    <div class="block-1">
        <h1>Прошел целый год как мы вместе время пролетает очень быстро. Казалось бы только недавно влюбился, только
            недавно были глупые проявления внимания </h1>
        <img src="/src/assets/photo.png" alt="love">
    </div>
    <div class="block-2">
        <h1>28.08.2023</h1>
        <img src="/src/assets/photo2.png" alt="photo">
        <p>Первый полцелуй, первый серьезный шаг, до сих пор помню как я нервничал</p>
        <p class="block-2--p">Партенит, сколько в нем было эмоций, самых лучших с тобой, это место останеться в моем
            сердце навсегда</p>
    </div>
    <div class="block-3">
        <h1>04.09.2023-∞</h1>
        <img src="/src/assets/photo3.png" alt="">
        <p>Самое лучшее решение в моей жизни, которое изменило мою жизнь на до и после</p>
    </div>
    <div class="block-4">
        <h1>11.11.2023</h1>
        <h2>🤭</h2>
        <p>Много было потрачено нервов для этого</p>
        <div class="block-4--img">
            <img src="/src/assets/photo_2024-01-11_03-22-43%201.png" alt="">
            <img src="/src/assets/Screenshot_8%201.png" alt="">
            <img src="/src/assets/photo_2024-03-08_11-31-56%201.png" alt="">
        </div>
    </div>
    <div class="block-5">
        <h1>04.09.2024</h1>
        <p>Целый год нашей любви, которая надеемся никогда не закончится.
            Будем радовать друг друга своим присуствием.
            Построим свое будущее, счастливое будующее.
            Люблю тебя моя сладость ❤️</p>
    </div>
</template>

<script>
//Добавить стикер в избранном в конец страницы
</script>

<style scoped>
.block-5 {
    background: linear-gradient(180.00deg, rgb(241, 185, 185),rgb(253, 99, 99) 100%);
    height: 100vh;
    h1 {
        padding-top: 134px;
    }
    p {
        max-width: 1326px;
        margin-top: 76px;
        color: rgb(255, 255, 255);
        font-size: 40px;
        font-weight: 300;
        line-height: 48px;
        text-align: left;
    }
}
.block-4 {
    background: linear-gradient(180.00deg, rgb(253, 99, 99), rgb(241, 185, 185) 100%);
    height: 100vh;

    h1 {
        padding-top: 84px;
    }

    .block-4--img {
        margin-top: 92px;
        display: flex;
        gap: 30px;
        justify-content: center;

        img {
            margin: 0;
            max-width: 373px;
        }
    }

    h2 {
        margin-top: 30px;
        font-size: 96px;
        line-height: 116px;
        font-style: normal;
    }

    p {
        margin-top: 85px;
        max-width: 803px;
    }
}

h1 {
    padding-top: 95px;
    font-size: 48px;
    font-weight: 300;
    line-height: 58px;
    font-style: italic;
    text-align: center;
}

p {
    margin-top: 91px;
    font-size: 36px;
    font-weight: 300;
    line-height: 44px;
    max-width: 715px;
    text-align: left;
}

.block-3 {
    background: linear-gradient(180.00deg, rgb(241, 185, 185), rgb(253, 99, 99) 100%);
    height: 100vh;

    h1 {
        padding-top: 144px;
        padding-bottom: 37px;
    }

    p {
        margin-top: 92px;
        max-width: 815px;
    }
}

.block-2 {
    background: linear-gradient(180.00deg, rgb(253, 99, 99), rgb(241, 185, 185) 100%);
    height: 100vh;

    .block-2--p {
        margin-top: 37px;
        max-width: 1129px;
    }

    img {
        margin-top: 37px;
    }
}

.block-1 {
    max-width: 100%;
    max-height: 100%;
    background: linear-gradient(180.00deg, rgb(241, 185, 185), rgb(253, 99, 99) 100%);
    height: 100vh;

    h1 {
        font-size: 36px;
        padding-top: 60px;
        max-width: 880px;
        margin: auto;
        font-weight: 300;
        line-height: 48px;
    }

    img {
        text-align: center;
    }
}

@media screen and (max-width: 642px) {
    .block-4 {
        h1 {
            padding-top: 200px;
        }
        .block-4--img {
            margin-top: 30px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            img {
                max-width: 270px;
            }
        }
    }

    .block-1 {
        height: 70vh;

        h1 {
            max-width: 270px;
            line-height: 20px;
            font-size: 20px;
        }
    }

    .block-2 {
        height: 70vh;

        img {
            max-width: 270px;
        }

        p {
            margin-top: 20px;
        }

        .block-2--p {
            margin-top: 10px;
        }
    }

    .block-3 {
        height: 70vh;
    }

    p {
        font-size: 20px;
        line-height: 20px;
        padding-left: 20px;
    }

    h1 {
        line-height: 20px;
        font-size: 30px;
    }

    img {
        max-width: 300px;
    }

}
</style>