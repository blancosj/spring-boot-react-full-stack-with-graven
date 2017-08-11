package com.paskot.service.services.impl;

import com.paskot.service.services.IGroovyService;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import org.springframework.stereotype.Service;

@Service
public class GroovyService implements IGroovyService {
    @Override
    public Object eval(final String code) {
        Binding sharedData = new Binding();
        GroovyShell shell = new GroovyShell(sharedData);

        return shell.evaluate(code);
    }
}
