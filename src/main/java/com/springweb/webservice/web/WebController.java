package com.springweb.webservice.web;

import com.springweb.webservice.dto.posts.PostsSaveRequestDto;
import com.springweb.webservice.service.PostsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@AllArgsConstructor
public class WebController {

    PostsService postsService;

    @GetMapping("/")
    public String main(Model model){
        model.addAttribute("posts", postsService.findAllDesc());

        return "posts/main";
    }

}
