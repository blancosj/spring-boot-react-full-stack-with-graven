package com.paskot.service.services;

import com.paskot.service.models.Greeting;

public interface IServerService {
    Greeting greeting(String name);
}
