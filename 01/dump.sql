create database envioemails;

create table usuarios(
  id serial primary key,
  nome text not null,
  email varchar(235) unique not null
);