package com.magezi.studenttaskmanager.auth;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController //Tell Spring this is to handle HTTTP requests
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")//Allow any domain to access this controller.
public class AuthController {

    private final AuthService authService;

    //Constructor AuthService is injected here by Spring. We dont have to create an instance of it, Spring will do it.
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    //Register endpoint to handle user registration
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    //Login method here
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}