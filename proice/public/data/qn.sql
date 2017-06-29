SET NAMES UTF8;
DROP DATABASE IF EXISTS qn;
CREATE DATABASE qn CHARSET=UTF8;
USE qn;
/*�û���¼*/
CREATE TABLE qn_user(
    uid     INT PRIMARY KEY AUTO_INCREMENT,
    account VARCHAR(32),
    upwd    VARCHAR(20)
);
INSERT INTO qn_user VALUES(3,'15973242494','123456');
INSERT INTO qn_user VALUES(5,'13096546267','123456');

/*ͼƬ�ֲ�*/
CREATE TABLE qn_slider(
    sid     INT PRIMARY KEY AUTO_INCREMENT,
    simg    VARCHAR(32),
    sname   VARCHAR(32)
);
INSERT INTO qn_slider VALUES
    (NULL,'../img/lunbo1.jpg','��ٻŮ�Ļ�ڴ���'),
    (NULL,'../img/lunbo2.jpg','ٻŮ���������ÿ�'),
    (NULL,'../img/lunbo3.jpg','�������������'),
    (NULL,'../img/lunbo4.jpg','�Ͻ����䱦ר��');

 /*iconСͼ��*/
 CREATE TABLE qn_icon(
    iid     INT PRIMARY KEY AUTO_INCREMENT,
    icon    VARCHAR(32),
    iname   VARCHAR(32)
 );
 INSERT INTO qn_icon VALUES
    (1,'','����ע��'),
    (2,'','��ֵ����'),
    (3,'','ȫ�¿ڴ���'),
    (4,'','�˺ű���'),
    (5,'','��ȡ���'),
    (6,'','�ر���'),
    (7,'','����ٻŮ�Ļ�'),
    (8,'','ٻŮ�ٷ�΢��'),
    (9,'','ٻŮ�ٷ�΢��'),
    (10,'','��Ƶ'),
    (11,'','ͼ��'),
    (12,'','����'),
    (13,'','ͬ��');

    /*��Ϸָ��*/
CREATE TABLE qn_introduce(
    did     INT PRIMARY KEY AUTO_INCREMENT,
    dname   VARCHAR(20)
);
INSERT INTO qn_introduce VALUES
    (1,'��ȡ���'),
    (2,'̽��׼��'),
    (3,'����ָ��'),
    (4,'��������'),
    (5,'ó��ָ��'),
    (6,'������'),
    (7,'װ������'),
    (8,'����ϵͳ'),
    (9,'����ϵͳ'),
    (10,'�������'),
    (11,'����У��'),
    (12,'�ܵ�Χ��'),
    (13,'��������'),
    (14,'��Զ����'),
    (15,'ʮ����'),
    (16,'��������̸'),
    (17,'��ʦ����ս'),
    (18,'����ϵͳ'),
    (19,'����ϵͳ'),
    (20,'��԰ϵͳ'),
    (21,'����ϵͳ'),
    (22,'�׷���'),
    (23,'��½�����'),
    (24,'�������');

/**/