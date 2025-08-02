const catalogItems = [
    {
        id: 1,
        title: "Phố Đường Tàu", 
        images: ["Img/pdt ảnh 1.webp","Img/pdt ảnh 5.webp","Img/pdt ảnh 6.webp","Img/pdt ảnh 7.webp","Img/pdt ảnh 8.webp",],
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
        images: ["Img/rùa ảnh 1.webp","Img/rùa ảnh 5.webp","Img/rùa ảnh 6.webp",], // <-- use images array
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
        images: ["Img/hn moi ảnh 1.webp","Img/hn moi ảnh 5.webp","Img/hn moi ảnh 6.webp","Img/hn moi ảnh 7.webp"],
        category: "Kiến trúc",
        complexity: 5,
        pieces: 981,
        price: 0.00,
        featured: false,
        description: "Mô hình Tòa Soạn Báo Hà Nội tái hiện hình ảnh một góc bảng tin, nơi lưu giữ dòng thời sự qua năm tháng cùng phong cách Pháp thuộc đặc trưng. Với cánh cổng sắt đen, bảng tin và dòng chữ “Hà Nội Mới” đỏ rực phía trên tòa nhà, sản phẩm đêm đến một không gian hoài cổ, trang nghiêm mà cũng thật thân thuộc với mỗi người con thủ đô.",
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
        images: ["Img/mrn ảnh 1.webp","Img/mrn ảnh 5.webp","Img/mrn ảnh 6.webp","Img/mrn ảnh 7.webp"],
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
        images: ["Img/bus ảnh 1.webp","Img/bus ảnh 5.webp","Img/bus ảnh 6.webp","Img/bus ảnh 7.webp","Img/bus ảnh 8.webp"],
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
