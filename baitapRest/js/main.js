const tinhDTB = (...number)=>{
    let numbers = 0;
    return (number.map((number)=>{
        numbers += parseFloat(number)
    }),
    (numbers / number.length).toFixed(2))
}

function dom(selector){
    return document.querySelector(selector)
}

dom('#btnKhoi1').addEventListener('click', ()=>{
    const diemToan = +dom('#inpToan').value;
    const diemLy = +dom('#inpLy').value;
    const diemHoa = +dom('#inpHoa').value;
    dom('#tbKhoi1').innerHTML = tinhDTB(diemToan, diemLy, diemHoa)
})

dom('#btnKhoi2').addEventListener('click', ()=>{
    const diemVan = +dom('#inpVan').value;
    const diemSu = +dom('#inpSu').value;
    const diemDia = +dom('#inpDia').value;
    const diemAnh = +dom('#inpEnglish').value;
    dom('#tbKhoi2').innerHTML = tinhDTB(diemVan, diemSu, diemDia, diemAnh)
})