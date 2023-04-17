use ecomercegt;
db.createCollection('usuarios');
db.createCollection('articulos');
db.createCollection('sessions');

db.usuarios.insertMany(
    [
        {
            'user': 'Jose',
            'email': 'jose@mail.com',
            'password': 'pass123',
            'role': 'USUARIO'
        },
        {
            'user': 'Andrea',
            'email': 'andrea@mail.com',
            'password': 'pass456',
            'role': 'USUARIO'
        },
        {
            'user': 'Edgar',
            'email': 'edgar@mail.com',
            'password': 'pass789',
            'role': 'USUARIO'
        },
        {
            'user': 'LuisP',
            'email': 'luisp@mail.com',
            'password': 'pass101112',
            'role': 'USUARIO'
        },
        {
            'user': 'DanielA',
            'email': 'daniela@mail.com',
            'password': 'pass131415',
            'role': 'USUARIO'
        },
        {
            'user': 'JosePaq',
            'email': 'josepaq@mail.com',
            'password': 'pass161718',
            'role': 'PAQUETERIA'
        },
        {
            'user': 'GuillermoPaq',
            'email': 'guillermopaq@mail.com',
            'password': 'pass192021',
            'role': 'PAQUETERIA'
        },
        {
            'user': 'admin',
            'email': 'admin_3@gmail.com',
            'password': 'adminpass',
            'role': 'ADMIN'
        }

    ]
)

db.articulos.insertMany(
    [
        {
            'usuario': 'Jose',
            'nombre': 'Smartwatch',
            'precio': 250.99,
            'imagen': 'https://example.com/smartwatch.jpg',
            'descripcion': 'Reloj inteligente con pantalla táctil y medición de actividad física',
            'categoria': ['Tecnología']
        },
        {
            'usuario': 'Jose',
            'nombre': 'Aspiradora Robot',
            'precio': 400.50,
            'imagen': 'https://example.com/aspiradora-robot.jpg',
            'descripcion': 'Aspiradora autónoma con sistema de navegación inteligente y programable',
            'categoria': ['Hogar']
        },
        {
            'usuario': 'Jose',
            'nombre': 'Libro de Ciencia Ficción',
            'precio': 20.99,
            'imagen': 'https://example.com/libro-ciencia-ficcion.jpg',
            'descripcion': 'Novela futurista con elementos de tecnología avanzada y viajes espaciales',
            'categoria': ['Literatura']
        },
        {
            'usuario': 'Jose',
            'nombre': 'Lámpara de Mesa',
            'precio': 35.00,
            'imagen': 'https://example.com/lampara-mesa.jpg',
            'descripcion': 'Lámpara de diseño minimalista con base de madera y pantalla de vidrio',
            'categoria': ['Decoración']
        },
        {
            'usuario': 'Jose',
            'nombre': 'Libro de matemáticas para secundaria',
            'precio': 20,
            'imagen': 'https://www.example.com/libro_matematicas.jpg',
            'descripcion': 'Libro de texto completo de matemáticas para estudiantes de educación secundaria, con teoría, ejercicios y problemas resueltos. Escrito por reconocidos expertos en la materia.',
            'categoria': ['Académico', 'Literatura']
        },
        {
            'usuario': 'Andrea',
            'nombre': 'Macbook Air',
            'precio': 1299.99,
            'imagen': 'https://www.apple.com/v/macbook-air/l/images/overview/hero_endframe__fivqt9yw9s2u_large.jpg',
            'descripcion': 'Laptop ultradelgada con pantalla Retina de 13 pulgadas, chip M1 de Apple y hasta 18 horas de duración de la batería.',
            'categoria': ['Tecnología']
        },
        {
            'usuario': 'Andrea',
            'nombre': 'Juego de Sábanas de Algodón',
            'precio': 49.99,
            'imagen': 'https://www.amazon.com/images/I/81xPZgLjjKL._AC_SL1500_.jpg',
            'descripcion': 'Juego de sábanas de algodón suave y cómodo para cama tamaño queen, incluye sábana ajustable, sábana plana y fundas de almohada.',
            'categoria': ['Hogar']
        },
        {
            'usuario': 'Andrea',
            'nombre': 'Calculadora Científica',
            'precio': 19.99,
            'imagen': 'https://www.casio-intl.com/asia/en/calc/products/fx-991ex/image_main.png',
            'descripcion': 'Calculadora científica avanzada con pantalla de alta resolución y funciones matemáticas complejas.',
            'categoria': ['Académico']
        },
        {
            'usuario': 'Andrea',
            'nombre': 'Los Juegos del Hambre',
            'precio': 10.99,
            'imagen': 'https://images-na.ssl-images-amazon.com/images/I/51L-5W8-jvL._SX329_BO1,204,203,200_.jpg',
            'descripcion': 'Novela de ciencia ficción distópica sobre una competición mortal en un futuro post-apocalíptico.',
            'categoria': ['Literatura']
        },
        {
            'usuario': 'Andrea',
            'nombre': 'Espejo Decorativo',
            'precio': 29.99,
            'imagen': 'https://www.ikea.com/us/en/images/products/langesund-mirror-white__0796942_PE767719_S5.JPG',
            'descripcion': 'Espejo decorativo de pared con marco blanco de estilo nórdico.',
            'categoria': ['Decoración']
        },
        {
            'usuario': 'Edgar',
            'nombre': 'Set de libros de programación',
            'precio': 119.99,
            'imagen': 'https://example.com/programacion.jpg',
            'descripcion': 'Este set de libros de programación de Edgar es la herramienta perfecta para cualquier persona que quiera aprender a programar o mejorar sus habilidades existentes. Con títulos sobre lenguajes de programación populares como Python y JavaScript, así como temas avanzados como el aprendizaje automático y la inteligencia artificial, este set es ideal para estudiantes, profesionales y aficionados por igual.',
            'categoria': ['Académico', 'Literatura']
        },
        {
            'usuario': 'Edgar',
            'nombre': 'Lámpara de escritorio',
            'precio': 25.99,
            'imagen': 'https://example.com/lampara.jpg',
            'descripcion': 'Lámpara de escritorio LED con brazo ajustable y 3 niveles de intensidad de luz',
            'categoria': ['Hogar', 'Decoración']
        },
        {
            'usuario': 'Edgar',
            'nombre': 'Tablet',
            'precio': 279.99,
            'imagen': 'https://example.com/tablet.jpg',
            'descripcion': 'Tablet con pantalla de 10 pulgadas, 4 GB de RAM y 128 GB de almacenamiento interno',
            'categoria': ['Tecnología', 'Académico']
        },
        {
            'usuario': 'Edgar',
            'nombre': 'Juego de sábanas',
            'precio': 49.99,
            'imagen': 'https://example.com/sabanas.jpg',
            'descripcion': 'Juego de sábanas de algodón egipcio para cama matrimonial',
            'categoria': ['Hogar', 'Decoración']
        },
        {
            'usuario': 'Edgar',
            'nombre': 'Mochila',
            'precio': 79.99,
            'imagen': 'https://example.com/mochila.jpg',
            'descripcion': 'Mochila resistente al agua con capacidad para portátil de 15 pulgadas',
            'categoria': ['Académico', 'Otros']
        },
        {
            'usuario': 'LuisP',
            'nombre': 'Laptop HP Envy 15',
            'precio': 1200.50,
            'imagen': 'https://www.example.com/laptop_hp_envy_15.jpg',
            'descripcion': 'Laptop HP Envy 15 con procesador Intel Core i7 de 10ma generación, 16GB de RAM, pantalla Full HD de 15 pulgadas y disco duro de estado sólido de 512GB. Ideal para trabajo y entretenimiento.',
            'categoria': ['Tecnología']
        },
        {
            'usuario': 'LuisP',
            'nombre': 'Juego de sábanas de algodón',
            'precio': 89.99,
            'imagen': 'https://www.example.com/juego_sabanas_algondon.jpg',
            'descripcion': 'Juego de sábanas de algodón de 500 hilos, suaves y cómodas al tacto. Incluye sábana bajera, sábana encimera y fundas de almohada. Disponible en varios colores y tamaños.',
            'categoria': ['Hogar']
        },
        {
            'usuario': 'LuisP',
            'nombre': 'Calculadora científica Texas Instruments',
            'precio': 49.99,
            'imagen': 'https://www.example.com/calculadora_texas_instruments.jpg',
            'descripcion': 'Calculadora científica Texas Instruments con pantalla de 4 líneas y 16 caracteres. Permite realizar cálculos complejos y programables para matemáticas, estadísticas y ciencias. Incluye manual de instrucciones y estuche protector.',
            'categoria': ['Académico', 'Tecnología']
        },
        {
            'usuario': 'LuisP',
            'nombre': 'Libro "Cien años de soledad" de Gabriel García Márquez',
            'precio': 12.99,
            'imagen': 'https://www.example.com/libro_cien_anos_de_soledad.jpg',
            'descripcion': 'Libro "Cien años de soledad" de Gabriel García Márquez, una obra maestra de la literatura latinoamericana. Edición de tapa dura con ilustraciones y prólogo del autor. Una joya para cualquier amante de la literatura.',
            'categoria': ['Literatura']
        },
        {
            'usuario': 'LuisP',
            'nombre': 'Lámpara de mesa de cerámica',
            'precio': 59.99,
            'imagen': 'https://www.example.com/lampara_mesa_ceramica.jpg',
            'descripcion': 'Lámpara de mesa de cerámica hecha a mano con diseño moderno y elegante. Cuenta con pantalla de lino y base de madera. Perfecta para iluminar cualquier rincón de la casa con estilo.',
            'categoria': ['Decoración']
        },
        {
            'usuario': 'DanielA',
            'nombre': 'Laptop ASUS Zenbook',
            'precio': 1299.99,
            'imagen': 'https://example.com/laptop-asus-zenbook.jpg',
            'descripcion': 'Laptop de alta gama con procesador Intel Core i7 de 11ª generación, 16 GB de RAM, 1 TB de almacenamiento SSD y pantalla de 14 pulgadas con resolución Full HD. Perfecta para trabajo y entretenimiento.',
            'categoria': ['Tecnología']
        },
        {
            'usuario': 'DanielA',
            'nombre': 'Juego de sábanas de algodón',
            'precio': 89.99,
            'imagen': 'https://example.com/juego-sabanas-algodon.jpg',
            'descripcion': 'Juego de sábanas de alta calidad 100% algodón, suaves y cómodas al tacto. Incluye una sábana ajustable, una sábana encimera y una funda de almohada. Disponible en tamaño queen y king.',
            'categoria': ['Hogar']
        },
        {
            'usuario': 'DanielA',
            'nombre': 'Libro "El Quijote"',
            'precio': 19.99,
            'imagen': 'https://example.com/libro-quijote.jpg',
            'descripcion': 'Edición especial del clásico de la literatura española "El Quijote" de Miguel de Cervantes, con tapa dura y detalles en dorado. Perfecto para coleccionistas y amantes de la literatura.',
            'categoria': ['Literatura']
        },
        {
            'usuario': 'DanielA',
            'nombre': 'Set de tazas de cerámica',
            'precio': 29.99,
            'imagen': 'https://example.com/set-tazas-ceramica.jpg',
            'descripcion': 'Set de 4 tazas de cerámica hechas a mano, cada una con un diseño único y colorido. Aptas para microondas y lavavajillas. Ideal para disfrutar de una buena taza de café o té.',
            'categoria': ['Decoración', 'Hogar']
        },
        {
            'usuario': 'DanielA',
            'nombre': 'Calculadora científica',
            'precio': 14.99,
            'imagen': 'https://example.com/calculadora-cientifica.jpg',
            'descripcion': 'Calculadora científica de alta precisión con más de 250 funciones matemáticas y científicas, pantalla de 2 líneas y 10 dígitos, y memoria interna para almacenar hasta 9 resultados. Ideal para estudiantes y profesionales de ciencias y matemáticas.',
            'categoria': ['Académico', 'Tecnología']
        }
    ]
)