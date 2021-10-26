#!/bin/bash

mvn install \
    -Pupdate \
    -DDATABASE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver \
    -DDATABASE_URL=jdbc:mysql://localhost:3306/db \
    -DDATABASE_USERNAME=mysqluser \
    -DDATABASE_PASSWORD=mysqluspw \

