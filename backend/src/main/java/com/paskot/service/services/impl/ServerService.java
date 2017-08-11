package com.paskot.service.services.impl;

import com.paskot.service.models.Greeting;
import com.paskot.service.services.IServerService;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicLong;

@Service
public class ServerService implements IServerService {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @Override
    public Greeting greeting(final String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
}
