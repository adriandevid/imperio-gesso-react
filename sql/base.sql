create table services(
	id serial not null,
	title varchar(200) not null,
	subtitle varchar(200) null,
	description text not null,
	image varchar(200) not null
);

create table products(
	id serial not null,
	title varchar(200) not null,
	description varchar(200) not null,
	price varchar(20) not null
);

create table requests(
	id serial not null,
	service_id int4 not null,
	email varchar(100) not null,
	phone varchar(20) not null,
	name_people varchar(100) not null
);

alter table services add primary key (id);
alter table products add primary key (id);
alter table requests add primary key (id);

alter table requests add constraint service_fkey foreign key (service_id) references services(id);


insert into services(title, description, image) 
values (
	'Forro com Sancas (1)', 
	' As sancas são molduras rebaixadas que podem ser usadas para esconder a iluminação embutida (como spots ou fitas de LED). Podem ser abertas, fechadas ou invertidas.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/1-vImYxS3xGl8qmb5LHgyeAgk0iYDMnM.png'
);

insert into services(title, description, image) 
values (
	'Forro com Iluminação Embutida', 
	' Placas de gesso especialmente moldadas para acomodar diferentes tipos de luminárias embutidas, como spots, criando efeitos de luz direcionada.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/1-vImYxS3xGl8qmb5LHgyeAgk0iYDMnM.png'
);


insert into services(title, description, image) 
values (
	'Forro com Sancas (2)', 
	' As sancas são molduras rebaixadas que podem ser usadas para esconder a iluminação embutida (como spots ou fitas de LED). Podem ser abertas, fechadas ou invertidas.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/11-Up9WDvTu2sJnzsFL6hnTNwaiZ9ztND.jpg'
);

insert into services(title, description, image) 
values (
	'Forro de Gesso com Rasgo de Luz', 
	'É um estilo que permite a instalação de fitas de LED embutidas em “rasgos�? no forro, proporcionando uma iluminação indireta e moderna.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/12-zNEv78sdpt5jXMnymcAITgwgJXcbW9.jpg'
);


insert into services(title, description, image) 
values (
	'Forro em Camadas (Níveis)', 
	'Forros dispostos em diferentes alturas (camadas), permitindo criar volumes e formas geométricas no teto. Pode ser usado para delimitar espaços em ambientes grandes ou para criar efeitos visuais.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/13-bNqEwNVrvJGvHORktDh2pmFPPuqjSB.jpg'
);


insert into services(title, description, image) 
values (
	'Forro em Camadas (Níveis) (2)', 
	'Forros dispostos em diferentes alturas (camadas), permitindo criar volumes e formas geométricas no teto. Pode ser usado para delimitar espaços em ambientes grandes ou para criar efeitos visuais.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/2-TyIJ8SAZapgrgHvU1Huh7XbULlXb0C.jpg'
);

insert into services(title, description, image) 
values (
	'Forro Liso', 
	'Feito com placas de gesso lisas, oferece um acabamento uniforme e simples. Muito utilizado em ambientes modernos e minimalistas.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/14-VvlICFb0gTT7h1JK1HTrPQ1wID3RoS.jpeg'
);

insert into services(title, description, image) 
values (
	'Forro com Ilha Central', 
	'Consiste em criar uma área rebaixada ou elevada no centro do teto, destacando essa parte do ambiente com iluminação especial ou molduras, ideal para salas de estar ou jantar.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/3-5EZlaPKPLdrx1CJU0afGvU0weVfCW6.jpg'
);


insert into services(title, description, image) 
values (
	'Forro de gesso com sanca invertida', 
	' Nesse estilo, o rebaixamento é feito apenas em um lado do teto, criando um efeito assimétrico. A iluminação em LED é embutida na sanca invertida, proporcionando uma iluminação indireta e suave. ', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/4-9T2RnR0nFnCtPTb1crMm0vYWMtnmBI.jpg'
);


insert into services(title, description, image) 
values (
	'Forro de gesso com sanca invertida (2)', 
	' Nesse estilo, o rebaixamento é feito apenas em um lado do teto, criando um efeito assimétrico. A iluminação em LED é embutida na sanca invertida, proporcionando uma iluminação indireta e suave. ', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/5-bYO4nhwSBnDgjbK7phhHqaR32WeFxE.jpg'
);


insert into services(title, description, image) 
values (
	'Forro com Ilha Central (2)', 
	'Consiste em criar uma área rebaixada ou elevada no centro do teto, destacando essa parte do ambiente com iluminação especial ou molduras, ideal para salas de estar ou jantar.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/6-4AzCF1Pk7YN7c8TBFGxXoTpbAsTXBS.jpg'
);


insert into services(title, description, image) 
values (
	'Forro com ilha central e sancas laterais parciais', 
	'Nesse design, há uma ilha central rebaixada e sancas apenas nas laterais direita e esquerda, deixando a parte superior e inferior do ambiente sem sancas, criando um efeito de moldura assimétrica. A iluminação em LED nas sancas laterais pode ser embutida, destacando ainda mais o design.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/7-68soBKrQ4d2JA2lLiOITOtT0XzXqzB.jpg'
);

insert into services(title, description, image) 
values (
	'Forro com Sancas (3)', 
	' As sancas são molduras rebaixadas que podem ser usadas para esconder a iluminação embutida (como spots ou fitas de LED). Podem ser abertas, fechadas ou invertidas.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/8-pJT3TvwfCAs410IL6zUaVvYL5Iji6P.jpeg'
);

insert into services(title, description, image) 
values (
	'Forro com Sancas (4)', 
	' As sancas são molduras rebaixadas que podem ser usadas para esconder a iluminação embutida (como spots ou fitas de LED). Podem ser abertas, fechadas ou invertidas.', 
	'https://htilqjbghnvmjfsj.public.blob.vercel-storage.com/projects/9-lNrYsd3hXS6QOHKrAvuRto6zjOQHGW.jpeg'
);

