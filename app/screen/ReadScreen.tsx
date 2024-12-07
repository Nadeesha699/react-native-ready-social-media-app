import { styles } from "@/css/main";
import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export const ReadScreen = () => {
  const [btnFollownig, setBtnFollownig] = useState(false);

  return (
    <>
      <StatusBar />
      <View>
        <View style={styles.readscreen_con1}>
          <ImageBackground
            source={require("@/assets/images/young-man-city-bus-stop-generative-ai.jpg")}
            style={styles.readscreen_img1}
          >
            <View style={styles.readscreen_con2}>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/images/like.png")}
                  style={styles.readscreen_img2}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/images/comment.png")}
                  style={styles.readscreen_img2}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.readscreen_con3}>
            <View style={{ width: "70%" }}>
              <Text style={styles.readscreen_txt1}>
                The Midnight Passenger 🏃‍♂️
              </Text>
              <Text style={styles.readscreen_txt4}>Nadeesha Ruwandima</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.readscreen_btn1,
                {
                  borderWidth: btnFollownig ? 0 : 2,
                  backgroundColor: btnFollownig ? "#fe165c" : "transparent",
                },
              ]}
              onPress={() => {
                btnFollownig ? setBtnFollownig(false) : setBtnFollownig(true);
              }}
            >
              <Text
                style={[
                  styles.readscreen_txt2,
                  { color: btnFollownig ? "white" : "black" },
                ]}
              >
                {btnFollownig ? "following" : "follow"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.readscreen_txt3}>
            The highway stretched endlessly into the darkness, illuminated only
            by the beams of Jake’s headlights. The storm raged outside, pounding
            rain against the windshield, and the faint crackle of static on the
            radio filled the silence. Jake had been driving for hours, his eyes
            heavy with exhaustion, but he couldn’t stop. Not tonight. He was on
            his way to the city to finalize his divorce papers—a closure he
            desperately needed. The solitude of the road was a welcome escape
            from his turbulent thoughts. That is, until he saw her. Standing on
            the shoulder, drenched from the rain, was a woman. She waved
            frantically, her figure barely visible in the downpour. Jake
            hesitated. He had always been taught to avoid strangers, especially
            at night. But guilt gnawed at him. She looked desperate. Sighing, he
            pulled over and rolled down the window just enough to speak. “Need a
            ride?” The woman leaned in, her face obscured by her soaked hair.
            “Please,” she said, her voice trembling. “I need to get to Raven
            Hill. It’s an emergency.” Jake frowned. Raven Hill was at least 30
            miles out of my way. “That’s pretty far,” he said cautiously.
            “What’s the emergency?” She hesitated, her gaze darting nervously
            down the road. “My husband... He’s after me.” Something about the
            way she said it sent a chill down Jake’s spine. Against his better
            judgment, he unlocked the door. “Get in.” The woman slid into the
            passenger seat, shivering. She hugged herself, her wet clothes
            clinging to her frail frame. Jake handed her a blanket from the back
            seat. “Thank you,” she murmured. They drove in tense silence for a
            few miles. Jake couldn’t help but glance at her from the corner of
            his eye. There was something off about her—her hands trembled, and
            she kept looking over her shoulder as if expecting someone to
            appear. Finally, he broke the silence. “So, what’s your name?”
            “Lila,” she said, barely above a whisper. “Lila,” Jake repeated.
            “I’m Jake. Look, I don’t mean to pry, but are you sure you’re safe?
            Should we call the police?” Her reaction was immediate and panicked.
            “No! No police. Please. He has connections... He’ll find me if they
            get involved.” Jake tightened his grip on the wheel, unsure of what
            to make of her cryptic answer. Before he could press further, she
            grabbed his arm. “Stop the car,” she hissed. “What? Why?” he asked,
            confused. “Just stop!” she insisted. Reluctantly, he pulled over.
            The rain had lightened, and the road was eerily quiet. Lila stared
            out the window, her face pale and tense. “Lila, what’s going on?”
            Jake asked, his voice firm. “If you’re in trouble, I need to know.”
            She didn’t answer. Instead, she opened the door and stepped out into
            the rain. Jake cursed under his breath and followed her. “Lila! What
            are you doing?” he called out. She stood in the middle of the road,
            staring into the distance. Jake turned to follow her gaze—and froze.
            A pair of headlights appeared on the horizon, getting closer by the
            second. A black SUV roared down the highway, its engine growling
            like a predator. Jake felt his stomach knot. “That’s him,” Lila
            whispered, her voice trembling. “He found me.” Before Jake could
            react, the SUV skidded to a stop a few yards away. A tall man
            stepped out, his silhouette imposing under the dim light of the
            storm. “Lila,” the man called, his voice cold and commanding. “Come
            here. Now.” Jake instinctively stepped in front of her. “Hey, buddy,
            I don’t know what’s going on, but you need to back off.” The man
            smiled, a chilling expression devoid of warmth. “This doesn’t
            concern you.” “She’s not going anywhere with you,” Jake said, his
            voice shaking but resolute. The man’s smile faded, replaced by a
            menacing glare. He reached into his coat—and pulled out a gun.
            “Move,” he ordered, his voice low and dangerous. Jake’s mind raced.
            He couldn’t let this stranger take her, but what could he do against
            a gun? Before he could decide, Lila did something unexpected. She
            stepped forward, her expression calm and unreadable. “It’s okay,
            Jake,” she said softly. “He won’t hurt you.” “Lila, no—” Jake
            started, but she raised a hand to stop him. She turned to face the
            man, her trembling replaced by an eerie stillness. “You’ve made a
            mistake coming here,” she said. The man’s confidence wavered. “What
            are you talking about?” Lila smiled, but it wasn’t a kind smile. It
            was sharp, predatory. Her eyes seemed to glow faintly in the dark.
            “You thought I was running,” she said, her voice carrying an
            otherworldly edge. “But I wasn’t running from you. I was leading you
            here.” The air grew heavy, and the storm intensified. Lightning
            flashed, and in its brief light, Jake saw something impossible.
            Shadows writhed around Lila, twisting into grotesque shapes. The
            man’s gun fell from his hand as he stumbled back. “What are you?” he
            screamed. Lila stepped closer, her form shifting into something
            monstrous. “Your end,” she whispered. Jake stood frozen as the night
            exploded into chaos. When the storm finally passed, Lila was gone.
            So was the man—and any trace of his SUV. Jake got back into his car,
            his hands trembling as he started the engine. He didn’t look back as
            he drove away, but he couldn’t shake the feeling that he’d just
            encountered something far beyond his understanding.
          </Text>
        </ScrollView>
      </View>
    </>
  );
};
