import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useEmail, setUseEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const mockLogin = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Logging in:', email);
        resolve(true);
      }, 1000);
    });
  };

  const mockSignup = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Signing up:', email);
        resolve(true);
      }, 1000);
    });
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      if (isLogin) {
        await mockLogin(email, password);
        Alert.alert('Welcome', `Logged in as ${email}`);
      } else {
        await mockSignup(email, password);
        Alert.alert('Account created', `Welcome ${email}`);

        router.replace('home/profile');
      }
    } catch (e) {
      Alert.alert('Auth error', e.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      
      <LinearGradient
        colors={['#0F172A', '#1E293B', '#334155']}
        style={styles.gradient}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>🎬</Text>
              <Text style={styles.title}>Streamo</Text>
            </View>
            <Text style={styles.subtitle}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </Text>
            <Text style={styles.description}>
              {isLogin 
                ? 'Sign in to continue your streaming journey'
                : 'Join thousands of users discovering amazing content'}
            </Text>
          </View>

          <View style={styles.content}>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, useEmail && styles.activeTab]}
                onPress={() => setUseEmail(true)}
                activeOpacity={0.8}
              >
                <Text style={[styles.tabText, useEmail && styles.activeTabText]}>
                  Email
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, !useEmail && styles.activeTab]}
                onPress={() => setUseEmail(false)}
                activeOpacity={0.8}
              >
                <Text style={[styles.tabText, !useEmail && styles.activeTabText]}>
                  Phone
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder={useEmail ? 'Enter your email' : 'Enter your phone number'}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  placeholderTextColor="#64748B"
                  keyboardType={useEmail ? 'email-address' : 'phone-pad'}
                />
              </View>
              
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter your password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                  placeholderTextColor="#64748B"
                />
              </View>
            </View>

            {isLogin && (
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[styles.submitButton, isLoading && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#3B82F6', '#1D4ED8']}
                style={styles.buttonGradient}
              >
                <Text style={styles.submitButtonText}>
                  {isLoading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
              </Text>
              <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.toggleLink}>
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <Image
                  source={{ uri: 'https://www.google.com/favicon.ico' }}
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <Image
                  source={{ uri: 'https://www.facebook.com/favicon.ico' }}
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: { alignItems: 'center', marginBottom: 40 },
  logoContainer: { alignItems: 'center', marginBottom: 16 },
  logo: { fontSize: 48, marginBottom: 8 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', letterSpacing: 1 },
  subtitle: { fontSize: 24, fontWeight: '600', color: '#E2E8F0', marginBottom: 8 },
  description: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
  content: {
    flex: 1,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#3B82F6',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: { fontSize: 16, color: '#64748B', fontWeight: '500' },
  activeTabText: { color: '#FFFFFF', fontWeight: '600' },
  inputContainer: { marginBottom: 16 },
  inputWrapper: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  input: {
    padding: 16,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 24 },
  forgotPasswordText: { color: '#60A5FA', fontSize: 14, fontWeight: '500' },
  submitButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonGradient: { paddingVertical: 16, alignItems: 'center' },
  disabledButton: { opacity: 0.6 },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  toggleText: { color: '#94A3B8', fontSize: 16, marginRight: 8 },
  toggleLink: { color: '#60A5FA', fontSize: 16, fontWeight: '600' },
  divider: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#334155' },
  dividerText: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  socialIcon: { width: 20, height: 20, marginRight: 8 },
  socialButtonText: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: '500',
  },
});
