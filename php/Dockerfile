FROM php:7.4-apache

RUN apt-get update && apt-get install -y libonig-dev && \
docker-php-ext-install pdo_mysql mysqli mbstring

RUN pecl install xdebug-3.1.4 && docker-php-ext-enable xdebug
COPY docker-php-ext-xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
