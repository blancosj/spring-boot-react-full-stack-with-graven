package com.paskot.service.controllers;

import com.paskot.service.models.Greeting;
import com.paskot.service.services.IGroovyService;
import com.paskot.service.services.IServerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/reactor")
public class ServerController {

    @Autowired
    IServerService service;

    @Autowired
    IGroovyService groovyService;

    final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/greeting", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<Greeting> sayHello(@RequestParam(value = "name", required = false, defaultValue = "Stranger") String name) {

        LOG.debug("greeting {}", name);

        return ResponseEntity.ok(service.greeting(name));
    }

    @RequestMapping(value = "/eval", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<String> eval(@RequestParam final String code) {
        return ResponseEntity.ok(String.format("%s", groovyService.eval(code)));
    }

    /**
     * handle an exception that occurred in the controller
     *
     * @param ex exception
     * @return message
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(final Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }

}
