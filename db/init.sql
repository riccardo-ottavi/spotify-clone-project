-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify_clone
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist_id` int NOT NULL,
  `year` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'Trap fever',1,2026,'/images/trap-fever.png'),(2,'Hip-Hop fever',1,2025,'/images/hip-hop-fever.png'),(3,'House fever',1,2024,'/images/house-fever.png');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 11:23:39
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify_clone
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums_songs`
--

DROP TABLE IF EXISTS `albums_songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums_songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `album_id` int NOT NULL,
  `song_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `album_id` (`album_id`),
  KEY `song_id` (`song_id`),
  CONSTRAINT `albums_songs_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE,
  CONSTRAINT `albums_songs_ibfk_2` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums_songs`
--

LOCK TABLES `albums_songs` WRITE;
/*!40000 ALTER TABLE `albums_songs` DISABLE KEYS */;
INSERT INTO `albums_songs` VALUES (1,1,2),(2,1,6),(3,1,3),(4,1,10),(5,1,13),(6,1,17),(7,1,19),(8,1,22),(9,1,25),(10,1,28),(11,2,5),(12,2,1),(13,2,7),(14,2,8),(15,2,15),(16,2,18),(17,2,21),(18,2,24),(19,2,27),(20,3,9),(21,3,11),(22,3,4),(23,3,12),(24,3,14),(25,3,16),(26,3,20),(27,3,23),(28,3,26);
/*!40000 ALTER TABLE `albums_songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 11:23:40

-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify_clone
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `bio` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Sfaso','/images/propic.jpg','Nato a New York nel 2034, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta repellat hic rem libero tenetur iure culpa blanditiis, dolores rerum reprehenderit fugiat. Quisquam sed recusandae accusantium magnam soluta debitis dignissimos!');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 11:23:40
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify_clone
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `playlist_songs`
--

DROP TABLE IF EXISTS `playlist_songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playlist_id` int DEFAULT NULL,
  `song_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `playlist_songs_ibfk_1` (`playlist_id`),
  CONSTRAINT `playlist_songs_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_songs`
--

LOCK TABLES `playlist_songs` WRITE;
/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` VALUES (139,1,1),(140,1,3),(141,1,5),(142,1,9),(143,1,18),(144,2,7),(145,2,11),(146,2,13),(147,2,10),(148,2,17),(149,3,6),(150,3,8),(151,3,15),(152,3,2),(153,3,24),(179,93,8),(180,93,20),(181,93,13),(182,93,14);
/*!40000 ALTER TABLE `playlist_songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 11:23:39
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify_clone
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `notes` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlists`
--

LOCK TABLES `playlists` WRITE;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` VALUES (1,'Daily Mix 1','/images/sinister.jpeg',NULL),(2,'Daily Mix 2','/images/split.jpeg',NULL),(3,'Daily Mix 3','/images/mixdaily.jpeg',NULL),(93,'Provaaaaaaaa22222','https://res.cloudinary.com/dzxlccdhs/image/upload/v1775725014/playlists/qoqk8vjutxadt0sddq41.png','proviamo');
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 11:23:40

-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spotify_clone
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `duration` varchar(10) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `audio` varchar(255) DEFAULT NULL,
  `artistId` int DEFAULT NULL,
  `albumId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Animal Crossing theme Remix','Sfaso','Trap fever','01:58','/images/stranger.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663226/ac2_Master_uyaxjp.wav',1,1),(2,'Afro','Sfaso','Trap fever','02:52','/images/youg.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663252/afro_Master_socba9.wav',1,1),(3,'My band','Sfaso','Trap fever','01:58','/images/my-band.png','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663239/band_Master_s7iisr.wav',1,1),(4,'Blessato','Sfaso','Trap fever','01:05','/images/blessato.png','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663014/blessed_Master_r6qp5a.wav',1,1),(5,'Come in un film','Sfaso','Hip-Hop fever','01:30','/images/mixdaily.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663065/film_Master_ahxrev.wav',1,2),(6,'Sempre e solo un combattente','Sfaso','Hip-Hop fever','03:14','/images/split.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663270/fighter_Master_nk239s.wav',1,2),(7,'Flautista','Sfaso','Hip-Hop fever','03:54','/images/stranger.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663332/flutist_Master_lutryz.wav',1,2),(8,'Assolo','Sfaso','Hip-Hop fever','01:58','/images/youg.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663280/guitarist_Master_ee0qji.wav',1,2),(9,'Direzione: Malibù','Sfaso','House fever','03:10','/images/aquietplace.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663285/malibu_Master_thxzgk.wav',1,3),(10,'Path toward exilation','Sfaso','House fever','03:02','/images/metal_lifting.jpg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663291/manor-solo-beat_j9zj8e.wav',1,3),(11,'Like a saxophone','Sfaso','House fever','03:40','/images/mixdaily.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663334/saxist_Master_lkchko.wav',1,3),(12,'Secret files','Sfaso','House fever','03:07','/images/split.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663335/spaceShip_Master_hjy117.wav',1,3),(13,'Sciolti','Sfaso','Trap fever','01:35','/images/spoti.svg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663187/sciolti_Master_qqp7bf.wav',1,1),(14,'Passanti','Sfaso','Trap fever','02:36','/images/youg.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663289/passanti-con-scratch_nhbtq6.wav',1,1),(15,'SheKnowsIt','Sfaso','Trap fever','03:23','/images/pogo.png','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663329/pogo_Master_y41alr.wav',1,1),(16,'Load\' up the choppa','Sfaso','Trap fever','02:53','/images/load\'-up-the-choppa.png','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663332/weezy2_Master_jf0jse.wav',1,1),(17,'Esrever','Sfaso','Hip-Hop fever','01:43','/images/mixdaily.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663181/reverse_Master_yk0sth.wav',1,2),(18,'Rage against *','Sfaso','Hip-Hop fever','02:57','/images/split.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663326/synthist_Master_gbhqhq.wav',1,2),(19,'Solo drive','Sfaso','Hip-Hop fever','02:16','/images/last-solo-drive.png','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663302/redrum_Master_os4req.wav',1,2),(20,'Lo capisci?','Sfaso','Hip-Hop fever','01:31','/images/youg.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663222/taipan2_Master_w31aax.wav',1,2),(21,'Showdown','Sfaso','House fever','01:28','/images/aquietplace.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663223/trappist_Master_hel7bt.wav',1,3),(22,'No Vibe Killing','Sfaso','House fever','01:58','/images/metal_lifting.jpg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663303/pluckist_Master_ucmrwz.wav',1,3),(23,'Molto Meglio','Sfaso','House fever','01:58','/images/molto-meglio.png','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663307/pinzatrice_Master_ctliea.wav',1,3),(24,'Pianista Sull\'Adriatico','Sfaso','House fever','01:58','/images/split.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663296/pianist_Master_tet6ag.wav',1,3),(25,'Opera','Sfaso','House fever','01:58','/images/spoti.svg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663113/opera_Master_jpcbd7.wav',1,3),(26,'Drive By','Sfaso','House fever','01:58','/images/metal_lifting.jpg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663026/duro_Master_jdi1ft.wav',1,3),(27,'Polleggiamo?','Sfaso','House fever','01:58','/images/mixdaily.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663280/chill_Master_blh1ps.wav',1,3),(28,'Percussionismo','Sfaso','House fever','01:58','/images/split.jpeg','https://res.cloudinary.com/dzxlccdhs/video/upload/v1775663263/bongist_Master_gsq9cn.wav',1,3);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 11:23:40
