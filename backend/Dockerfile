FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD ./target/dssales-0.0.1-SNAPSHOT.jar dssales.jar
ENTRYPOINT ["java","-jar","dssales.jar"]
