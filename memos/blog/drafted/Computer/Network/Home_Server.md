# WEB2-Home Server

https://opentutorials.org/course/3265

---

## 들어가기

Internet 위의 컴퓨터와 컴퓨터가 통신하기위해서는 IP Address 가 필요함.

- IPv4 - 약 42 억개 주소
  - computer, smartphone 등 IOT 시대의 도래로 동이나버림
  - 이를 위해서
    - IPv6 - 겁나많음
    - Router

공유기에 연결된 컴퓨터에 서버를 설치해 운영하는건 쉬운일이 아님. 이를 위해서 ::

- Network Address Translation
- Public VS Private IP Address
- Port forwarding
- Dynamic VS Static IP Address
- Dynamic DNS

**Purpose** :: Client 로만 역할을 해왔던 router 위의 컴퓨터가 server 로서의 역할을 하기위해선 어떻게 해야할까.

---

## Router

### IP Address(Internet Protocol Address)란 ?

### 1.

인터넷을 사용하기 위해서는 IP 주소가 무조건 필요하다. 그래야지만 다른 컴퓨터와 통신이 가능하다.
전화를 생각해보면, 상대방 전화를 알아야되듯이 말이야 !

예를들어 Simpson -> Marge 으로 전화건다고 생각해봐
Marge 는 Simpson 으로부터 req 를 받고 res 를 보내기위해서는 Simpson 의 번호를 당연히 알아야겠지 ?

당연히 알아야되니 Simpson 은 req 와 동시에 자신의 번호를 같이 보내게되.

즉, 인터넷에 접속된 컴퓨터들은 정보를 주고받기위해선 양쪽다 IP Address 는 필요하다 !

### 2.

일상생활에서는

1.  통신사와 계약해서 회선을 받고, 그 케이블을 꽂고 연결된 순간 IP Address 가 부여된다.
    ```js
    const IP = 59.6.66.238
    ```
2.  그리고 스마트폰, 아이패드 등 여러개로 늘어났을 때는, 통신사와는 하나의 회선계약을 유지하고 공유기를 쓰게 되지.

    1.  이 공유기를 잘 보면 혼자 떨어진놈(WAN) + 여러 구멍들(LAN)로 구성되있다.
    2.  ![](noteImages/2018-07-12-10-28-18.png)
    3.  여기서 보면 하나의 공유기에 여러개의 기기들이 묶여있다.
        1.  이걸 지역 네트워크라고 함.
        2.  Local Area Network
    4.  공유기의 WAN 은 전 세계에서 가장 거대한 광역 네트워크인 Internet 에 연결되있음.
        1.  Wide Area Network
    5.  즉, 공유기는 Wide Area Network -> Local Area Network 로 distribute 하는 intermediary 이다 ! === Router

3.  기기들이 공유기에 연결되는 순간 모든 기기들은 각자의 IP 를 부여받고, 그 기기들과 소통하기 위한 Gateway address(혹은 Router address) 란게 Router 에 생성된다.
    ![](noteImages/2018-07-12-10-41-53.png)

### Summary

정리하면 이렇다.

**WAN** 은 광역 네트워크와 연결되어 바깥의 녀석들이 접속 가능하므로 **public IP address** 라고 불리고, **LAN** 에서 부여받는 IP address 는 누구나 접속 가능한게 아닌 gateway 를 거쳐서 들어올 수 있기에 **private IP address** 라고 불린다.
![](noteImages/2018-07-12-10-44-14.png)

또한, **LAN**으로 쓸 수 있는 IP Address 는 기존의 룰이 정해져 있다.
![](noteImages/2018-07-12-10-50-05.png)

그래서 우리는 표 안의 범위 밖이라면, 아, **public IP address** 이군 ! 하고 알 수 있는 것이다.

---

## Network Address Translation

이 기술로 각각의 컴퓨터들이 외부의 컴퓨터에 접속하게 가능하다.

- private IP address 에서의 요청을 기록한다. 즉, 어느 기기의 IP address 로부터의 요청인지를 기록한다.
- 그리고 그 요청을 public IP address 로 광역 네트워크로 요청한다.

Internet - public IP address -> `Network Address Translation` - private IP address

---

## Route

::terminal

```bash
❯ netstat -rn                                                                                                         ⏎
Routing tables

Internet:
Destination        Gateway            Flags        Refs      Use   Netif Expire
default            192.168.3.1        UGSc          101        0     en0
```

```bash
❯ route -n get 0.0.0.0                                                                                                ⏎
   route to: default
destination: default
       mask: default
    gateway: 192.168.3.1
  interface: en0
      flags: <UP,GATEWAY,DONE,STATIC,PRCLONING>
 recvpipe  sendpipe  ssthresh  rtt,msec    rttvar  hopcount      mtu     expire
       0         0         0         0         0         0      1500         0

여기에서 보이는 gateway가 LAN 상에서의 router IP address.
```

```bash
❯ ifconfig
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether 14:23:30:a8:c3:c4  <---- MAC address
	inet 192.168.3.3 netmask 0xffffff00 broadcast 192.168.3.255

여기 보이는 en0가 나의 넷웤이고 inet = internet을 의미함.
```

router  의 gateway 로 브라우저를 열고 들어가서 로그인하면 router 의 기본 세팅들을 조작할 수 있다.
eg) user / user1234

---

## Port

![](noteImages/2018-07-12-17-39-45.png)

- 위의 그림에서 보여지듯 포트 종류는 0 ~ 65535 개로 한정되어있음.
- 관용적으로 8080 은 http schema(통신규약)를 이용하는 80 포트와 동일하게 취급됨

![](noteImages/2018-07-12-17-43-12.png)

- 우리가 단순히 어떤 URL( Uniform Resource Locator =~ web address )에 접속을 한다하면 브라우저는 `:80` 포트 번호를 생략하고 보여줌.

>  여기서 URL 이란..
> http://www.atmarkit.co.jp/ait/articles/0103/02/news003.html
> Uniform Resource Locator
> ![](noteImages/2018-07-13-01-58-56.png)
>
> URL Format
>
> `URI = scheme:[//authority]path[?query][#fragment]`
> where the authority component divides into
> `authority = [userinfo@]host[:port]`
>
> Examples of popular schemes include `http`, `https`, `ftp` ...
>
> ```js
> scheme://username:password@domain:port/path?query_string#anchor
> ```

---

## Port Forwarding

![](noteImages/2018-07-13-02-48-16.png)

포트 할당 관리는 router 의 ip address 로 접속해서 조작하면됨.

### MAC address ( media access control address ) 확인

https://en.wikipedia.org/wiki/MAC_address

- MAC :: unique identifier assigned to a network interface controller (NIC)

::terminal

- `ifconfig en1 | awk '/ether/{print $2}'`

  - On systems with both an ethernet and wireless connection, **en0 will be your ethernet interface** and **en1 will be your wireless interface**. A **MAC address** will be shown for both en0 and en1 and likely labelled as "**ether**".

  - On systems with just a wireless connection, en0 will be your wireless interface. The MAC address for en0 will likely be labelled as "ether".

  - ![](noteImages/2018-07-13-11-16-56.png)

- `networksetup -listallhardwareports`

  -

  - ```js
      Hardware Port: USB 10/100/1000 LAN
      Device: en6
      Ethernet Address: 00:e0:4c:...

      Hardware Port: Wi-Fi
      Device: en0
      Ethernet Address: 80:e6:50:...

      Hardware Port: Bluetooth PAN
      Device: en3
      Ethernet Address: 80:e6:50:...

      Hardware Port: Thunderbolt 1
      Device: en1
      Ethernet Address: 72:00:05:...

      Hardware Port: Thunderbolt 2
      Device: en2
      Ethernet Address: 72:00:05:...

      Hardware Port: Thunderbolt Bridge
      Device: bridge0
      Ethernet Address: 72:00:05:...

      VLAN Configurations
      ===================
    ```

---

## Dynamic & Static IP address

![](noteImages/2018-07-13-11-26-43.png)
우선 인터넷을 쓰기위해서는 집 <-> 통신사(ISP :: Internet Service Provider) 와의 계약을 거친다.

근데 IP 는 유한 resource 이므로, 통신사는 보통 동적으로 dynamical 하게 IP 를 할당하여 유한성을 연장시킨다.

---

## DHCP (Dynamic Host Configuration Protocol)

한 라우터를 쓰고 있는데, 하나의 컴퓨터가 추가됬다고 해보자.

중복되는 IP address 는 할당이 불가능하니, 이 컴퓨터에는 다른 IP 가 할당되게 될 것이다.

![](noteImages/2018-07-13-11-30-41.png)

이 할당되는 IP address 를 제어하고 싶으면, **TCP/IPv4 properties** 를 입맛에 맛게 제어해주면 된다.
이런식으로..
![](noteImages/2018-07-13-15-31-29.png)

그런데 위보다 더 간단히 자동으로 설정하게 하기위해 **DHCP** 란게 필요하게 된다.

기본적으로 모든 Router 들은 DHCP Server 를 내장하고 있고, 동시에 기기 또한 DHCP Client 를 내장하고 있다.

1.  MAC Address 와 함께 req
    - ![](noteImages/2018-07-13-15-37-25.png)
2.  Router 에서 res
    - ![](noteImages/2018-07-13-15-38-07.png)
    - DHCP Server 는 어떤 기기들이 어떻게 연결되어 있는지 기록하고 있기에 이런 응답이 가능하다.
3.  User
    - ![](noteImages/2018-07-13-15-39-27.png)
4.  Router
    - ![](noteImages/2018-07-13-15-41-03.png)
5.  드디어 연결됨
    - ![](noteImages/2018-07-13-15-41-44.png)

---

## 마무리

Domain
1~10 만원 / 년
freenom.com: 1 년간 무료
Dynamic Dns: 고정아이디를 비슷한 효과

### Chalange

- web hosting
- server hosting
- cloud computing
