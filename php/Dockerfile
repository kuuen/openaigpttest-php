FROM php:7.4-apache

RUN apt-get update && apt-get install -y libonig-dev && \
docker-php-ext-install pdo_mysql mysqli mbstring


RUN pecl install xdebug-3.1.4 && docker-php-ext-enable xdebug
COPY docker-php-ext-xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

COPY ssl/cert.pem /etc/ssl/certs/
COPY ssl/privkey.pem /etc/ssl/private/
COPY ssl/chain.pem /etc/ssl/private/

COPY conf/000-default.conf /etc/apache2/sites-available/
COPY conf/default-ssl.conf /etc/apache2/sites-available/
COPY conf/fqdn.conf /etc/apache2/conf-available/fqdn.conf

RUN apt-get install nano

RUN a2enconf fqdn
RUN a2enmod rewrite