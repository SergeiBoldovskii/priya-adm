module.exports=({env})=>({host:env('HOST','0.0.0.0'),port:env.int('PORT',8080),app:{keys:(env('APP_KEYS')||'a,b,c,d').split(',')}});
