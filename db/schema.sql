CREATE DATABASE  IF NOT EXISTS BLOG;

USE BLOG;
CREATE TABLE IF NOT EXISTS Post(id int unsigned AUTO_INCREMENT,title varchar(200) not null,content varchar(200) not null,primary key (id)) ;


INSERT INTO Post(title,content) values('carottes','some corottes from ukrain')