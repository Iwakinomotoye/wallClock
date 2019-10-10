function currentDate() {
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let second = d.getSeconds();
        hour = hour % 12;
        let hourDegrees = ((hour / 12) * 360) - 90;
        let minDegrees = ((minute / 60) * 360) - 90;
        let secDegrees = ((second / 60) * 360) - 90;
        document.querySelector(".hour-hand").style.transform = 'rotate(' + hourDegrees + 'deg)';
        document.querySelector(".minutes-hand").style.transform = 'rotate(' + minDegrees + 'deg)';
        document.querySelector(".seconds-hand").style.transform = 'rotate(' + secDegrees + 'deg)';
    }
    setInterval(currentDate, 1000);
