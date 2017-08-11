package com.paskot.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerConfiguration {

    public static void main(String[] args) {


        //Nova
//        final NovaAdaptorConfigurationBundle novaBundle = new NovaAdaptorConfigurationBundle(
//                applicationServerComponent.reactorApplicationResource().facade());
//        novaBundle.run(new NovaAdaptorConfiguration(configuration), environment);

        SpringApplication.run(ServerConfiguration.class, args);
    }
}
