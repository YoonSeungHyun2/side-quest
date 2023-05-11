package com.main_032.SideQuest.member.controller;

import com.main_032.SideQuest.member.dto.MemberPostDto;
import com.main_032.SideQuest.member.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = {"Member"}, description = "멤버 API")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @ApiOperation(value = "Sign up") //회원가입
    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@RequestBody MemberPostDto memberPostDto) {
        memberService.signup(memberPostDto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}