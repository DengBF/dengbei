SET NAMES UTF8;
DROP DATABASE IF EXISTS qn;
CREATE DATABASE qn CHARSET=UTF8;
USE qn;
/*用户登录*/
CREATE TABLE qn_user(
    uid     INT PRIMARY KEY AUTO_INCREMENT,
    account VARCHAR(32),
    upwd    VARCHAR(20)
);
INSERT INTO qn_user VALUES(3,'15973242494','123456');
INSERT INTO qn_user VALUES(5,'13096546267','123456');

/*图片轮播*/
CREATE TABLE qn_slider(
    sid     INT PRIMARY KEY AUTO_INCREMENT,
    simg    VARCHAR(32),
    sname   VARCHAR(32)
);
INSERT INTO qn_slider VALUES
    (NULL,'../img/lunbo1.jpg','新倩女幽魂口袋版'),
    (NULL,'../img/lunbo2.jpg','倩女兴银行信用卡'),
    (NULL,'../img/lunbo3.jpg','六周年独家数据'),
    (NULL,'../img/lunbo4.jpg','紫禁城珍宝专辑');

 /*icon小图标*/
 CREATE TABLE qn_icon(
    iid     INT PRIMARY KEY AUTO_INCREMENT,
    icon    VARCHAR(32),
    iname   VARCHAR(32)
 );
 INSERT INTO qn_icon VALUES
    (1,'','快速注册'),
    (2,'','充值中心'),
    (3,'','全新口袋版'),
    (4,'','账号保护'),
    (5,'','领取礼包'),
    (6,'','藏宝阁'),
    (7,'','漫画倩女幽魂'),
    (8,'','倩女官方微信'),
    (9,'','倩女官方微博'),
    (10,'','视频'),
    (11,'','图赏'),
    (12,'','音乐'),
    (13,'','同人');

    /*游戏指南*/
CREATE TABLE qn_introduce(
    did     INT PRIMARY KEY AUTO_INCREMENT,
    dname   VARCHAR(20)
);
INSERT INTO qn_introduce VALUES
    (1,'领取礼包'),
    (2,'探索准备'),
    (3,'入门指南'),
    (4,'快速升级'),
    (5,'贸易指南'),
    (6,'三界伙伴'),
    (7,'装备介绍'),
    (8,'灵兽系统'),
    (9,'坐骑系统'),
    (10,'帮会联赛'),
    (11,'关宁校场'),
    (12,'寇岛围攻'),
    (13,'镖行天下'),
    (14,'宁远觉华'),
    (15,'十世镜'),
    (16,'京城妖奇谈'),
    (17,'京师保卫战'),
    (18,'婚姻系统'),
    (19,'养育系统'),
    (20,'家园系统'),
    (21,'生活系统'),
    (22,'雷锋塔'),
    (23,'海陆空领地'),
    (24,'生活剧情');

/**/