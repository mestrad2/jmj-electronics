PGDMP     4                    z            milestone_2_testing    15.1    15.1 W    o           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            p           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            q           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            r           1262    17758    milestone_2_testing    DATABASE     �   CREATE DATABASE milestone_2_testing WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 #   DROP DATABASE milestone_2_testing;
                postgres    false            �            1259    18032 
   Appliances    TABLE     a  CREATE TABLE public."Appliances" (
    appliances_id integer NOT NULL,
    "desc" character varying(255) NOT NULL,
    cost integer NOT NULL,
    image character varying(255),
    brand character varying(255),
    model_num character varying(255),
    spec character varying(255),
    color character varying(255),
    utility character varying(255)
);
     DROP TABLE public."Appliances";
       public         heap    postgres    false            �            1259    18037    Appliances_appliances_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Appliances_appliances_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."Appliances_appliances_id_seq";
       public          postgres    false    222            s           0    0    Appliances_appliances_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."Appliances_appliances_id_seq" OWNED BY public."Appliances".appliances_id;
          public          postgres    false    223            �            1259    18038    Carts    TABLE     �   CREATE TABLE public."Carts" (
    cart_id integer NOT NULL,
    "desc" character varying(255),
    cost_ea integer,
    qty integer DEFAULT 1,
    total integer
);
    DROP TABLE public."Carts";
       public         heap    postgres    false            �            1259    18042    Carts_cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Carts_cart_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Carts_cart_id_seq";
       public          postgres    false    224            t           0    0    Carts_cart_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Carts_cart_id_seq" OWNED BY public."Carts".cart_id;
          public          postgres    false    225            �            1259    18043 	   Computers    TABLE     �  CREATE TABLE public."Computers" (
    computers_id integer NOT NULL,
    "desc" character varying(255) NOT NULL,
    cost integer NOT NULL,
    image character varying(255),
    brand character varying(255),
    model_num character varying(255),
    spec character varying(255),
    os character varying(255),
    color character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Computers";
       public         heap    postgres    false            �            1259    18048    Computers_computers_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Computers_computers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."Computers_computers_id_seq";
       public          postgres    false    226            u           0    0    Computers_computers_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."Computers_computers_id_seq" OWNED BY public."Computers".computers_id;
          public          postgres    false    227            �            1259    18049    Phones    TABLE       CREATE TABLE public."Phones" (
    phones_id integer NOT NULL,
    "desc" character varying(255) NOT NULL,
    cost integer NOT NULL,
    image character varying(255),
    brand character varying(255),
    model_num character varying(255),
    spec character varying(255),
    os character varying(255),
    color character varying(255),
    screen_size character varying(255),
    memory character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Phones";
       public         heap    postgres    false            �            1259    18054    Phones_phones_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Phones_phones_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."Phones_phones_id_seq";
       public          postgres    false    228            v           0    0    Phones_phones_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Phones_phones_id_seq" OWNED BY public."Phones".phones_id;
          public          postgres    false    229            �            1259    18055    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    18058    Tvs    TABLE     �  CREATE TABLE public."Tvs" (
    tvs_id integer NOT NULL,
    "desc" character varying(255) NOT NULL,
    cost integer NOT NULL,
    image character varying(255),
    brand character varying(255),
    model_num character varying(255),
    spec character varying(255),
    screen_size character varying(255),
    resolution character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Tvs";
       public         heap    postgres    false            �            1259    18063    Tvs_tvs_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tvs_tvs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Tvs_tvs_id_seq";
       public          postgres    false    231            w           0    0    Tvs_tvs_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Tvs_tvs_id_seq" OWNED BY public."Tvs".tvs_id;
          public          postgres    false    232            �            1259    17982 
   appliances    TABLE     -  CREATE TABLE public.appliances (
    appliances_id integer NOT NULL,
    "desc" character varying NOT NULL,
    cost money NOT NULL,
    image character varying,
    brand character varying,
    model_num character varying,
    spec text,
    color character varying,
    utility character varying
);
    DROP TABLE public.appliances;
       public         heap    postgres    false            �            1259    17987    appliances_appliances_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appliances_appliances_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.appliances_appliances_id_seq;
       public          postgres    false    214            x           0    0    appliances_appliances_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.appliances_appliances_id_seq OWNED BY public.appliances.appliances_id;
          public          postgres    false    215            �            1259    18086    carts    TABLE     �   CREATE TABLE public.carts (
    cart_id integer NOT NULL,
    "desc" character varying,
    cost_ea integer,
    qty integer,
    total integer
);
    DROP TABLE public.carts;
       public         heap    postgres    false            �            1259    17988 	   computers    TABLE     3  CREATE TABLE public.computers (
    computers_id integer NOT NULL,
    "desc" character varying NOT NULL,
    cost money NOT NULL,
    image character varying,
    brand character varying,
    model_num character varying,
    spec character varying,
    os character varying,
    color character varying
);
    DROP TABLE public.computers;
       public         heap    postgres    false            �            1259    17993    computers_computers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.computers_computers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.computers_computers_id_seq;
       public          postgres    false    216            y           0    0    computers_computers_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.computers_computers_id_seq OWNED BY public.computers.computers_id;
          public          postgres    false    217            �            1259    17994    phones    TABLE     a  CREATE TABLE public.phones (
    phones_id integer NOT NULL,
    "desc" character varying NOT NULL,
    cost money NOT NULL,
    image character varying,
    brand character varying,
    model_num character varying,
    spec text,
    os character varying,
    color character varying,
    screen_size character varying,
    memory character varying
);
    DROP TABLE public.phones;
       public         heap    postgres    false            �            1259    17999    phones_phones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.phones_phones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.phones_phones_id_seq;
       public          postgres    false    218            z           0    0    phones_phones_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.phones_phones_id_seq OWNED BY public.phones.phones_id;
          public          postgres    false    219            �            1259    18111    products    TABLE     H  CREATE TABLE public.products (
    prod_id integer NOT NULL,
    "desc" character varying(255) NOT NULL,
    cost integer NOT NULL,
    image character varying(255) DEFAULT 'https://place-puppy.com/300x300'::character varying NOT NULL,
    spec character varying(255) DEFAULT 'This is a product.'::character varying NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    18110    products_prod_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_prod_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.products_prod_id_seq;
       public          postgres    false    237            {           0    0    products_prod_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.products_prod_id_seq OWNED BY public.products.prod_id;
          public          postgres    false    236            �            1259    18094    searches    TABLE     �   CREATE TABLE public.searches (
    search_id integer NOT NULL,
    "desc" character varying(255) NOT NULL,
    cost money NOT NULL,
    image character varying(255),
    spec character varying(255)
);
    DROP TABLE public.searches;
       public         heap    postgres    false            �            1259    18093    searches_search_id_seq    SEQUENCE     �   CREATE SEQUENCE public.searches_search_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.searches_search_id_seq;
       public          postgres    false    235            |           0    0    searches_search_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.searches_search_id_seq OWNED BY public.searches.search_id;
          public          postgres    false    234            �            1259    18000    tvs    TABLE     (  CREATE TABLE public.tvs (
    tvs_id integer NOT NULL,
    "desc" character varying NOT NULL,
    cost money NOT NULL,
    image character varying,
    brand character varying,
    model_num character varying,
    spec text,
    screen_size character varying,
    resolution character varying
);
    DROP TABLE public.tvs;
       public         heap    postgres    false            �            1259    18005    tvs_tvs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tvs_tvs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.tvs_tvs_id_seq;
       public          postgres    false    220            }           0    0    tvs_tvs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.tvs_tvs_id_seq OWNED BY public.tvs.tvs_id;
          public          postgres    false    221            �           2604    18064    Appliances appliances_id    DEFAULT     �   ALTER TABLE ONLY public."Appliances" ALTER COLUMN appliances_id SET DEFAULT nextval('public."Appliances_appliances_id_seq"'::regclass);
 I   ALTER TABLE public."Appliances" ALTER COLUMN appliances_id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    18065    Carts cart_id    DEFAULT     r   ALTER TABLE ONLY public."Carts" ALTER COLUMN cart_id SET DEFAULT nextval('public."Carts_cart_id_seq"'::regclass);
 >   ALTER TABLE public."Carts" ALTER COLUMN cart_id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    18066    Computers computers_id    DEFAULT     �   ALTER TABLE ONLY public."Computers" ALTER COLUMN computers_id SET DEFAULT nextval('public."Computers_computers_id_seq"'::regclass);
 G   ALTER TABLE public."Computers" ALTER COLUMN computers_id DROP DEFAULT;
       public          postgres    false    227    226            �           2604    18067    Phones phones_id    DEFAULT     x   ALTER TABLE ONLY public."Phones" ALTER COLUMN phones_id SET DEFAULT nextval('public."Phones_phones_id_seq"'::regclass);
 A   ALTER TABLE public."Phones" ALTER COLUMN phones_id DROP DEFAULT;
       public          postgres    false    229    228            �           2604    18068 
   Tvs tvs_id    DEFAULT     l   ALTER TABLE ONLY public."Tvs" ALTER COLUMN tvs_id SET DEFAULT nextval('public."Tvs_tvs_id_seq"'::regclass);
 ;   ALTER TABLE public."Tvs" ALTER COLUMN tvs_id DROP DEFAULT;
       public          postgres    false    232    231            �           2604    18069    appliances appliances_id    DEFAULT     �   ALTER TABLE ONLY public.appliances ALTER COLUMN appliances_id SET DEFAULT nextval('public.appliances_appliances_id_seq'::regclass);
 G   ALTER TABLE public.appliances ALTER COLUMN appliances_id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    18070    computers computers_id    DEFAULT     �   ALTER TABLE ONLY public.computers ALTER COLUMN computers_id SET DEFAULT nextval('public.computers_computers_id_seq'::regclass);
 E   ALTER TABLE public.computers ALTER COLUMN computers_id DROP DEFAULT;
       public          postgres    false    217    216            �           2604    18071    phones phones_id    DEFAULT     t   ALTER TABLE ONLY public.phones ALTER COLUMN phones_id SET DEFAULT nextval('public.phones_phones_id_seq'::regclass);
 ?   ALTER TABLE public.phones ALTER COLUMN phones_id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    18114    products prod_id    DEFAULT     t   ALTER TABLE ONLY public.products ALTER COLUMN prod_id SET DEFAULT nextval('public.products_prod_id_seq'::regclass);
 ?   ALTER TABLE public.products ALTER COLUMN prod_id DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    18097    searches search_id    DEFAULT     x   ALTER TABLE ONLY public.searches ALTER COLUMN search_id SET DEFAULT nextval('public.searches_search_id_seq'::regclass);
 A   ALTER TABLE public.searches ALTER COLUMN search_id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    18072 
   tvs tvs_id    DEFAULT     h   ALTER TABLE ONLY public.tvs ALTER COLUMN tvs_id SET DEFAULT nextval('public.tvs_tvs_id_seq'::regclass);
 9   ALTER TABLE public.tvs ALTER COLUMN tvs_id DROP DEFAULT;
       public          postgres    false    221    220            ]          0    18032 
   Appliances 
   TABLE DATA           r   COPY public."Appliances" (appliances_id, "desc", cost, image, brand, model_num, spec, color, utility) FROM stdin;
    public          postgres    false    222   :h       _          0    18038    Carts 
   TABLE DATA           G   COPY public."Carts" (cart_id, "desc", cost_ea, qty, total) FROM stdin;
    public          postgres    false    224   Wh       a          0    18043 	   Computers 
   TABLE DATA           �   COPY public."Computers" (computers_id, "desc", cost, image, brand, model_num, spec, os, color, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �h       c          0    18049    Phones 
   TABLE DATA           �   COPY public."Phones" (phones_id, "desc", cost, image, brand, model_num, spec, os, color, screen_size, memory, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   �h       e          0    18055    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    230   �h       f          0    18058    Tvs 
   TABLE DATA           �   COPY public."Tvs" (tvs_id, "desc", cost, image, brand, model_num, spec, screen_size, resolution, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   Mi       U          0    17982 
   appliances 
   TABLE DATA           p   COPY public.appliances (appliances_id, "desc", cost, image, brand, model_num, spec, color, utility) FROM stdin;
    public          postgres    false    214   ji       h          0    18086    carts 
   TABLE DATA           E   COPY public.carts (cart_id, "desc", cost_ea, qty, total) FROM stdin;
    public          postgres    false    233   fj       W          0    17988 	   computers 
   TABLE DATA           i   COPY public.computers (computers_id, "desc", cost, image, brand, model_num, spec, os, color) FROM stdin;
    public          postgres    false    216   �j       Y          0    17994    phones 
   TABLE DATA           x   COPY public.phones (phones_id, "desc", cost, image, brand, model_num, spec, os, color, screen_size, memory) FROM stdin;
    public          postgres    false    218   �k       l          0    18111    products 
   TABLE DATA           F   COPY public.products (prod_id, "desc", cost, image, spec) FROM stdin;
    public          postgres    false    237   �l       j          0    18094    searches 
   TABLE DATA           H   COPY public.searches (search_id, "desc", cost, image, spec) FROM stdin;
    public          postgres    false    235   �m       [          0    18000    tvs 
   TABLE DATA           k   COPY public.tvs (tvs_id, "desc", cost, image, brand, model_num, spec, screen_size, resolution) FROM stdin;
    public          postgres    false    220   �o       ~           0    0    Appliances_appliances_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."Appliances_appliances_id_seq"', 1, false);
          public          postgres    false    223                       0    0    Carts_cart_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Carts_cart_id_seq"', 3, true);
          public          postgres    false    225            �           0    0    Computers_computers_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."Computers_computers_id_seq"', 1, false);
          public          postgres    false    227            �           0    0    Phones_phones_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Phones_phones_id_seq"', 1, false);
          public          postgres    false    229            �           0    0    Tvs_tvs_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Tvs_tvs_id_seq"', 1, false);
          public          postgres    false    232            �           0    0    appliances_appliances_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.appliances_appliances_id_seq', 6, true);
          public          postgres    false    215            �           0    0    computers_computers_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.computers_computers_id_seq', 5, true);
          public          postgres    false    217            �           0    0    phones_phones_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.phones_phones_id_seq', 5, true);
          public          postgres    false    219            �           0    0    products_prod_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.products_prod_id_seq', 10, true);
          public          postgres    false    236            �           0    0    searches_search_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.searches_search_id_seq', 13, true);
          public          postgres    false    234            �           0    0    tvs_tvs_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.tvs_tvs_id_seq', 4, true);
          public          postgres    false    221            �           2606    18074    Appliances Appliances_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."Appliances"
    ADD CONSTRAINT "Appliances_pkey" PRIMARY KEY (appliances_id);
 H   ALTER TABLE ONLY public."Appliances" DROP CONSTRAINT "Appliances_pkey";
       public            postgres    false    222            �           2606    18076    Carts Carts_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Carts"
    ADD CONSTRAINT "Carts_pkey" PRIMARY KEY (cart_id);
 >   ALTER TABLE ONLY public."Carts" DROP CONSTRAINT "Carts_pkey";
       public            postgres    false    224            �           2606    18078    Computers Computers_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."Computers"
    ADD CONSTRAINT "Computers_pkey" PRIMARY KEY (computers_id);
 F   ALTER TABLE ONLY public."Computers" DROP CONSTRAINT "Computers_pkey";
       public            postgres    false    226            �           2606    18080    Phones Phones_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public."Phones"
    ADD CONSTRAINT "Phones_pkey" PRIMARY KEY (phones_id);
 @   ALTER TABLE ONLY public."Phones" DROP CONSTRAINT "Phones_pkey";
       public            postgres    false    228            �           2606    18082     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    230            �           2606    18084    Tvs Tvs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Tvs"
    ADD CONSTRAINT "Tvs_pkey" PRIMARY KEY (tvs_id);
 :   ALTER TABLE ONLY public."Tvs" DROP CONSTRAINT "Tvs_pkey";
       public            postgres    false    231            �           2606    18016    appliances appliances_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.appliances
    ADD CONSTRAINT appliances_pkey PRIMARY KEY (appliances_id);
 D   ALTER TABLE ONLY public.appliances DROP CONSTRAINT appliances_pkey;
       public            postgres    false    214            �           2606    18092    carts carts_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (cart_id);
 :   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
       public            postgres    false    233            �           2606    18018    computers computers_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_pkey PRIMARY KEY (computers_id);
 B   ALTER TABLE ONLY public.computers DROP CONSTRAINT computers_pkey;
       public            postgres    false    216            �           2606    18020    phones phones_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_pkey PRIMARY KEY (phones_id);
 <   ALTER TABLE ONLY public.phones DROP CONSTRAINT phones_pkey;
       public            postgres    false    218            �           2606    18120    products products_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (prod_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    237            �           2606    18101    searches searches_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.searches
    ADD CONSTRAINT searches_pkey PRIMARY KEY (search_id);
 @   ALTER TABLE ONLY public.searches DROP CONSTRAINT searches_pkey;
       public            postgres    false    235            �           2606    18022    tvs tvs_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tvs
    ADD CONSTRAINT tvs_pkey PRIMARY KEY (tvs_id);
 6   ALTER TABLE ONLY public.tvs DROP CONSTRAINT tvs_pkey;
       public            postgres    false    220            ]      x������ � �      _   #   x�3�,I-.QHN,*Q0�C.c$1#�X� 
�
G      a      x������ � �      c      x������ � �      e   y   x�U�A�0D�}��*���&2�
��JS�_�dڬߟA���O1�0p��dh��:4Ka2˪�G^X���{K��ukR�"`�Z�sY���8ȵ�4�����*���y¿k-����9��{@u      f      x������ � �      U   �   x���1k�0���Wh�X�,[%���[�x�"�G,�HFz�ɿo�������q%�>҈�&���Mɦhv-&]��A;(�`~d������=)��;�ab����&؟j;h]���Xm�N�ū�P⏧?��DV.OɅ���q�XV�vy�]�D!V��L:�����|b��5��N����ώF�S�!?�i9�,��v�:4R��C�A\
�D2.��=�Lf_c��Ԁ�      h      x�3�,I-.QHN,*Q0�C�=... Vxv      W   >  x�M�1o�0F��Wܐ1E@�"�&m�P�J�,]8����m����6����{~!g"����$��$��*ؓRd���E�1�е�%�B�ƺ����-X%�OJ���V�ȹ�𖹻���j^�\r��Ƿ �a��f���ƈ����Q36�'9�`�VT:�I�
�i��~�Ҷ�������(�l�FA�?������Ħ�����Z�l���C>��A��D���'3v���=�4�]o>��a�=k�&�����+��T��C��
7V��?8?
��BOѡȊ,��3����˪RS�V�ʐ��纖%ṕ�����9�{      Y   �   x��ϱn�0����S�5��-R�"�v�$�$����}B�%Q+2���	Cu�N�@Jmmf-���p�0P� �v�K�Qq��8�#<NA"*�UcY;6��[�>��7�p�Qn��u�G�N���]�<��%�r�Q�5�bǨX�	|�Z���Cz�d��<	6�M7=p�w���3�޵�;K���v      l   ,  x���KN�0 е}�9@���/fTH]T*�,ظ�@"۲��G* �DK���H��#k�J����c�4�:#�{�˲�T!X5Z%$lk�>������I��C�ܵ2�4����:�L��[�an�t�o�&6�݉_�hBJ��V��cݡ�>-	��Ii��I����Q��3����ghE������
vU�,��lk����ȼ'')�2��(���"�=-�5�Z�\�P����:2�����)?bJ�?_ٹ��,#��*�~�a����u���_���� }N)��)�P      j   �  x���=o�0���7hdeɒ�c�tiu>P�M�#�� ���������	�v @r8��3q���HB�0>+�I��J�E6�EQ�E!�]�0�:��;7:��k�UQ��-.;���u���p�l����El�U'�I�|�Н�EV%b�bc��%�0�Y �4�1��5ǡn�}s�}�U�#Z�B�D�|р&h�1�"���b��0��r���D����F��בe��;��d��Ы �e����U)�$��b����֏�����OM�o�����P����X%1.��-^<�͠|��k	_�>]���[lE�$����8�{	���8l_s�i\�1���*��
�;��m�[9���������$��!;���QGo������6I�իZ�t4+��ʄL{���=�L&?���      [   �   x���=�P����O!�������|��&qj5\����p�A���Y�Ï ���wQV�ս�u���(�:�wq�mQV����X#>���e���,'"��fB ���t�N�w[�v:�삭���n'܀Y�IY��?�����,0�-�8K!���i     