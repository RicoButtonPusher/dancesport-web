create database comp_news;

use comp_news;

create table articles (
  title varchar(500),
  month varchar(50),
  day varchar(100),
  year varchar(5),
  author varchar(100),
  image varchar(1000),
  text varchar(20000),
  id int auto_increment,
  primary key(id)
);

insert into articles (title, month, day, year, author, image, text)
values ('Stacey builds dance floor in garage, student expects partner to be able to use it whenever.', 'February', 11, 2020, 'Parker', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/16832101_1873428932942204_2116652393510585652_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=7vaPfSwDKggAX9vrM7F&_nc_ht=scontent-sjc3-1.xx&oh=0d36dcf1715f01c6d41b720ca7dcd244&oe=604582CC', "Back in 2020, Stacey and Parker acquired an online student who was frankly the devil in the Bay Area. During the pandemic, Stacey made herself a home studio and this student constantly demanded that Parker use her studio even though it wasn't his studio to use for himself in the first place.")


insert into articles (title, month, day, year, author, image, text)
values ("Insurrection at US Capitol Led by Cheeto", 'January', 11, 2021, 'Parker', "https://www.aljazeera.com/wp-content/uploads/2021/01/000_8YA8J6.jpg?resize=770%2C513", "On January 6, the piece of shit that was the president of the united states tried to overthrow government by sending his stupid ass fleet of cultists to the capitol and execute congress in order to keep Trump in power. It was the single most disgraceful day in US history and I hope Trump is blamed for the entire thing. Motherfucker deserves to be in jail for life")

