const catalogItems = [
    {
        id: 1,
        title: "Phố Đường Tàu",
        i18nKey: "pdt",
        images: ["Img/pdt ảnh 1.webp","https://cdn.jsdelivr.net/gh/Lilbeemo2728/Xayxua-cdn/547302973_122127709328947222_9207703047044113230_n.jpg","Img/pdt ảnh 5.webp","Img/pdt ảnh 6.webp","Img/pdt ảnh 7.webp",],
        category: "Phương tiện",
        complexity: 5,
        pieces: 1838,
        price: 0.00,
        featured: true,
        description: "Đến với mô hình Phố Đường Tàu, vẻ đẹp giản dị mà chẳng đâu có được của đường tàu Phùng Hưng đã được tái hiện đầy sinh động. Mô hình này nổi bật với dãy nhà rợp hoa giấy, bàn ghế cà phê vỉa hè cùng đoàn tàu xanh-trắng băng qua con hẻm nhỏ - tất cả đã vẽ nên một bức tranh đời thường giản dị mà cũng thật tấp nập dưới bầu trời Hà Nội.  ",
        details: [
            "Độ khó: Rất khó",
            "Độ tuổi khuyến nghị: 16+",
            "Số lượng mảnh: 1838",
            "Khối lượng: 1489 g",
            "Kích thước: 54 x 14 x 19 cm",

        ]
    },
    {
        id: 2,
        title: "Tháp Rùa",
        i18nKey: "rua",
        images: ["Img/rùa ảnh 1.webp","https://cdn.jsdelivr.net/gh/Lilbeemo2728/Xayxua-cdn/544406414_122127709358947222_7651116638690410214_n.jpg","Img/rùa ảnh 5.webp","Img/rùa ảnh 6.webp",],
        category: "Văn Hóa",
        complexity: 3,
        pieces: 1105,
        price: 0.00,
        featured: true,
        description: "Mô hình Tháp Rùa Hà Nội đưa bạn khám phá công trình Tháp Rùa - một hình ảnh gắn bó thân thuộc với mỗi người dân Việt Nam. Với chi tiết rùa vàng, mô hình lắp rắp hứa hẹn không chỉ mang tính nghệ thuật mà còn tôn vinh lịch sử Việt Nam.",
        details: [
            "Độ khó: Trung bình",
            "Độ tuổi khuyến nghị: 16+",
            "Số lượng mảnh: 1105",
            "Khối lượng: 1258 g",
            "Kích thước: 28 x 34 x 24 cm",

        ]
    },
    {
        id: 3,
        title: "Tòa Soạn Báo Hà Nội Mới",
        i18nKey: "hnm",
        images: ["Img/hn moi ảnh 1.webp","https://cdn.jsdelivr.net/gh/Lilbeemo2728/Xayxua-cdn/546617005_122127709298947222_2084711460693815357_n.jpg","Img/hn moi ảnh 5.webp","Img/hn moi ảnh 6.webp","Img/hn moi ảnh 7.webp"],
        category: "Kiến trúc",
        complexity: 5,
        pieces: 981,
        price: 0.00,
        featured: false,
        description: "Mô hình Tòa Soạn Báo Hà Nội tái hiện hình ảnh một góc bảng tin, nơi lưu giữ dòng thời sự qua năm tháng cùng phong cách Pháp thuộc đặc trưng. Với cánh cổng sắt đen, bảng tin và dòng chữ \u201CHà Nội Mới\u201D đỏ rực phía trên tòa nhà, sản phẩm đêm đến một không gian hoài cổ, trang nghiêm mà cũng thật thân thuộc với mỗi người con thủ đô.",
        details: [
            "Độ khó: Rất khó",
            "Độ tuổi khuyến nghị: 16+",
            "Số lượng mảnh: 981",
            "Khối lượng: 736 g",
            "Kích thước: 15 x 32 x 27 cm",
        ]
    },
    {
        id: 4,
        title: "Nhà Hát Múa Rối Nước",
        i18nKey: "mrn",
        images: ["Img/mrn ảnh 1.webp","https://cdn.jsdelivr.net/gh/Lilbeemo2728/Xayxua-cdn/546621291_122127709394947222_5652930340302677240_n (1).jpg","Img/mrn ảnh 5.webp","Img/mrn ảnh 6.webp","Img/mrn ảnh 7.webp"],
        category: "Văn Hóa",
        complexity: 4,
        pieces: 1296,
        price: 0.00,
        featured: false,
        description: " Mô hình Nhà Hát Múa Rối Nước tái hiện một sân khấu múa rối nước nghệ thuật đầy sinh động mà gần gũi tới những người con Hà thành. Mô hình nổi bật với những đường nét kiên trúc tinh xảo đến từ mái đình rồng chầu cùng các chú rối, dàn nhạc truyền thống đã gợi nên thứ linh hồn độc đáo của hình thức nghệ thuật này.",
        details: [
            "Độ khó: khá khó",
            "Độ tuổi khuyến nghị: 16+",
            "Số lượng mảnh: 1296",
            "Khối lượng: 982 g",
            "Kích thước: 45 x 15 x 17 cm",

        ]
    },
    {
        id: 5,
        title: "Xe Buýt Hà Nội",
        i18nKey: "bus",
        images: ["Img/bus ảnh 1.webp","https://cdn.jsdelivr.net/gh/Lilbeemo2728/Xayxua-cdn/547000533_122127709520947222_7391684131854728137_n.jpg","Img/bus ảnh 5.webp","Img/bus ảnh 6.webp","Img/bus ảnh 7.webp","Img/bus ảnh 8.webp"],
        category: "Phương tiện",
        complexity: 2,
        pieces: 560,
        price: 0.00,
        featured: true,
        description: "Mô hình Xe Buýt Hà Nội tái hiện một góc đường phố thân thương cùng chiếc xe buýt đặc trưng giữa nhịp giao thông tấp nập của Hà Nội. Nổi bật nhất trong mô hình chính là chiếc xe buýt mang sắc đỏ-vàng đặc trưng và bến chờ xe nhỏ xinh - tất cả tạo nên dấu ấn khó phai trong mỗi người con Hà Nội về một khoảnh khắc vô cùng quen thuộc.",
        details: [
            "Độ khó: Dễ",
            "Độ tuổi khuyến nghị: 16+",
            "Số lượng mảnh: 560",
            "Khối lượng: 449 g",
            "Kích thước: 10 x 10 x 10 cm",

        ]
    },
];

// Helper to get translated catalog item fields
function getCatalogItemTranslated(item) {
    if (!window.xayxuaI18n || !item.i18nKey) return item;
    var t = window.xayxuaI18n.t;
    var key = "catdata." + item.i18nKey;
    return {
        id: item.id,
        title: t(key + ".title") !== key + ".title" ? t(key + ".title") : item.title,
        images: item.images,
        category: t(key + ".cat") !== key + ".cat" ? t(key + ".cat") : item.category,
        complexity: item.complexity,
        pieces: item.pieces,
        price: item.price,
        featured: item.featured,
        description: t(key + ".desc") !== key + ".desc" ? t(key + ".desc") : item.description,
        details: [
            t(key + ".d1") !== key + ".d1" ? t(key + ".d1") : item.details[0],
            t(key + ".d2") !== key + ".d2" ? t(key + ".d2") : item.details[1],
            t(key + ".d3") !== key + ".d3" ? t(key + ".d3") : item.details[2],
            t(key + ".d4") !== key + ".d4" ? t(key + ".d4") : item.details[3],
            t(key + ".d5") !== key + ".d5" ? t(key + ".d5") : item.details[4],
        ].filter(Boolean),
        i18nKey: item.i18nKey
    };
}
