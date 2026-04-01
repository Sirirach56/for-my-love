function showMessage() {
    // แสดงข้อความ surprise
    document.getElementById("surprise").style.display = "block";

    // สร้างหัวใจลอยขึ้น
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = "translate(-50%, -50%)";  // กึ่งกลางเป๊ะ
    heart.style.fontSize = "30px";
    heart.style.pointerEvents = "none"; // หัวใจไม่กวนการคลิก
    heart.style.animation = "floatUp 2s ease forwards";

    document.body.appendChild(heart);

    // ลบหัวใจออกหลังแอนิเมชันจบ (2 วินาที)
    setTimeout(() => {
        heart.remove();
    }, 2000);

    // สร้างฝนตัวอักษร
    let text = "I LOVE YOU 💖";
    let startLeft = 10; // เริ่มจากซ้าย 10%
    for (let i = 0; i < text.length; i++) {
        let charDiv = document.createElement("div");
        charDiv.classList.add("fall-char");
        charDiv.innerHTML = text[i];
        charDiv.style.left = startLeft + i * 4 + "%"; // เรียงตัวอักษรแนวนอน
        charDiv.style.fontSize = "30px"; // ขนาดเท่ากัน
        charDiv.style.animationDuration = "3s"; // ความเร็วเท่ากัน
        document.getElementById("falling-text").appendChild(charDiv);

        // ลบ element หลังแอนิเมชันจบ
        setTimeout(() => charDiv.remove(), 4000);
    }
}
